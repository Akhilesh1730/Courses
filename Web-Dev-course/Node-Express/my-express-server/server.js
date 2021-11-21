
const express=require("express");

const app=express();

app.listen(4000);

app.get("/",function(request,response){
      response.send("<h1>Hello</h1>");
});

app.get("/about",function(req,res){
      res.send("it's about");
});

app.get("/hobbies",function(req,res){
     res.send("It's hobbies");
});

app.get("/home",function(rew,res){
    res.send("It's home");
});
