// require the express module
import express from 'express';
import path from 'path';
import Pizza from './models/pizza';
import pizzaRoutes from './routes/pizza-routes';


// require the cors module
import cors from "cors"
 
// creates an instance of an Express server
const app = express();
 
// enable Cross Origin Resource Sharing so this API can be used from web-apps on other domains
app.use(cors())
 
// allow POST and PUT requests to use JSON bodies
app.use(express.json())



// Settings for web pages
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
 

//call GET "/"
app.use("/", pizzaRoutes);
//app.use("/specialtyPizza",pizzaRoutes);
//app.use("/review", pizzaRoutes);
//app.use("/submitReview",pizzaRoutes);


// define the port
const port = 3001;
 
// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));