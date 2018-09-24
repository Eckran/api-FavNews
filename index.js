var http = require('http')
const getNews = require('./News/getNews')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('hello');
    res.end();
  }).listen(3000);

  