const express=require("express");

const app=express();

module.exports=app;
const {register,login}=require("./controller/authentication.controller")
app.post("/login",login)
app.post("/register",register)
