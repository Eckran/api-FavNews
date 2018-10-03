/*var http = require('http')
var app = require('./app')

http.createServer(app.handleRequest).listen(3000);*/

var database = require('./db/connection')

var express   =    require("express");
var app       =    express();

app.get("/news",function(req,res){
    database.handle_database(req,res);
});

app.listen(3000);