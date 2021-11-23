const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const https=require("https");

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.htm");

});

app.post("/",function(req,res){
  var t=req.body.cityName;
  const url="https://api.openweathermap.org/data/2.5/weather?q="+t+"&APPID="put ur api key";
  https.get(url,function(response){
    response.on("data",function(data){
          const weatherData=JSON.parse(data);

          res.write("<h1>Temprature of "+ t + " is "+weatherData.main.temp+"</h1>");
          res.write("<br><h1>Weather desrciption: "+ weatherData.weather[0].description + "</h1>");
          const icon=weatherData.weather[0].icon;
          const imgURL= "http://openweathermap.org/img/wn/"+icon+"@2x.png";
          res.write("<img src= "+ imgURL + ">");
          res.send();
    });

  });
});
app.listen("3000");
