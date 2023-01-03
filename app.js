const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const {google} = require("googleapis");
const request = require("request");
const cors = require("cors");
const urlParse = require("url-parse");
const queryParse = require("query-string");
const axios = require("axios");
const { json } = require("body-parser");
const { defaultMaxListeners } = require("events");
const { ifError } = require("assert");
const navigator = require("navigator");
const {Client} = require("@googlemaps/google-maps-services-js");

const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    
    
})
app.get("/recommded.html",function(req,res){
    res.sendFile(__dirname+"/recommded.html")
})

app.get("/help.html",function(req,res){
    res.sendFile(__dirname+"/help.html")
    
})

app.post("/",function(req,res){
    var obj1 = req.body.search;
    
    if(obj1==="dumas"){
        res.redirect("https://goo.gl/maps/hqeqgEFoTwX9Djhe8")
    }else if(obj1==="vrmall"){
        res.redirect("https://g.page/VRSurat?share")
    }else if(obj1==="botnical"){
        res.redirect("https://goo.gl/maps/hcXboUDkgRSXurnR7");
    }else if(obj1==="ambika"){
        res.redirect("https://goo.gl/maps/2ahXQBrB8A6MqE4i8");
    }else if(obj1==="suratfort"){
        res.redirect("https://goo.gl/maps/W2fNiK1oBAD9Q2vk7");
    }else if(obj1==="dutch"){
        res.redirect("https://goo.gl/maps/J6DQjGTe7mwfCmTNA");
    }else{
        res.send("error not found");
    }


})





app.listen(3000,function(req,res){
    console.log("server is runing on port 3000");
})