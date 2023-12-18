const express = require("express");
const path=require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");

const Form = require("./models/form");

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../template/views");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);

app.get("/",(req,res)=>{
    res.render("index")
});

app.get("/form", (req,res )=>{
    res.render("form");
})

app.post("/form", async (req,res )=>{
    try{
        console.log(req.body.FullName);
        res.send(req.body.FullName);

    } catch (error){
        res.status(400).send(error);
    }
})

app.listen(3000, ()=>{
    console.log('port connected');
})
