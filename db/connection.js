var express   =    require("express");
var mysql     =    require('mysql');

var pool      =    mysql.createPool({
    connectionLimit : 100,
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'newstest',
    debug    :  false
});
module.exports = {
    handle_database: function (req, res){
        pool.query("SELECT * FROM News",function(err,rows){
            if(err) {
                return res.json({'error': true, 'message': 'Error occurred'+err});
            }
                    //connection will be released as well.
                    res.json(rows);
                    
           });
    }
}
