var express = require('express');
var app = new express();
var mongo = require('mongodb').MongoClient;
app.listen(8080,function(){
  console.log('server is up');
var mongoUrl="mongodb://localhost:27017/studentDb"
  mongo.connect(mongoUrl,function(err,db){
  db.createCollection("student",function(err,res){ if(err) throw err;
  console.log('collection created'); }); var studentObj =
  {"name":"yyyy","age":"14","rank":"1"};
  db.collection("student").insertOne(studentObj,function(err,res){ if(err) throw
  err; console.log(res); }) });
});

app.get("/data",function(req,res){
  var mongoUrl="mongodb://localhost:27017/studentDb"
  mongo.connect(mongoUrl,function(err,db){
    db.collection("student").find({}).toArray(function(err,result){
      console.log(result);
      res.send(result);
    });
  });
})
