import express from "express";
import Pizza from "../models/pizza";

const pizzaRoutes = express.Router();

const specialtyPizzas: Pizza[] = [
{
    id: 1, 
    name: "Anchovy Lover's",
    price: 10
    //toppings: ["Cream Cheese", "Salmon", "Onions"]
},
{
    id: 2, 
    name: "Paleo Pizza",
    price: 12
    //toppings: ["Cheddar Cheese", "Ground Beef", "Mushrooms"]
},
{
    id: 3, 
    name: "Dessert Pizza",
    price: 15 
    //toppings: ["White Cheese", "Crab", "capers"]
},
]; 
let nextID: number = 4

pizzaRoutes.get("/", function (req, res) {
    res.render("home");
});
pizzaRoutes.get("/specialtyPizza", function(req,res){
    //res.render("specialtyPizza",{{name}},{{price}});
    let nameOfPizza: string = req.query.name as string;
    let pizzaPrice: number = Number(req.query.price);
    res.render("specialty-pizza",{nameOfPizza,pizzaPrice});
});

pizzaRoutes.get("/review", function(req,res) {
    res.render("review");
});

pizzaRoutes.post("/submitReview", function (req,res){
    let yourName:string = req.body.yourName as string;
    let comment:string = req.body.comment as string;
    let rating: string = req.body.rating as string
    console.log(yourName);
    res.render("thanks", {yourName,comment,rating});
});

pizzaRoutes.get("/buildYourOWn", function(req,res){
    res.render("buildYourOwn",)
});
pizzaRoutes.post("/buildYourOwn", function(req,res){
    res.render("yourPizza",)
});

export default pizzaRoutes;