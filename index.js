var http = require('http')
//const getNews = require('./News/getNews')
var app = require('./app')

http.createServer(app.handleRequest).listen(3000);