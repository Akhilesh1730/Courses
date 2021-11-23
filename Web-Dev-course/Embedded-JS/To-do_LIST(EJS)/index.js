
const express=require("express");
const bodyParser=require("body-parser");
const dat=require(__dirname+"/date.js");
const app=express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var tasks=["Eat","Sleep","Study"];
app.get("/",function(req,res){

day=dat.getdate();//Module export example
  res.render( "list",{kindofDay:day,taskList:tasks});


});

app.post("/",function(req,res){
         var item=req.body.task;
         tasks.push(item);
         res.redirect("/");
});
app.listen("3000");
