var url = require('url');

module.exports = {
    handleRequest: function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        var path = url.parse(req.url).pathname;
        switch (path) {
            case '/':
                res.write('main page');
                break;
            case '/news':
                res.write('news page');
                break;
            default :
                res.writeHead(404);
                res.write('route not defined');
                res.end();
        }
    }
};