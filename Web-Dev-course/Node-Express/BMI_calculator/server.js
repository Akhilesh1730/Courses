const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendfile(__dirname+"/bmi.htm");
});

app.post("/",function(req,res){
    var w=parseFloat(req.body.weight);
    var h=parseFloat(req.body.height);
    var bmi=parseFloat(w/(h*h));

    res.send("Your bmi is " + bmi);
});

app.listen(4000);
