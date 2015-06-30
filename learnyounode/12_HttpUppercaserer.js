var map = require("through2-map");//A tiny wrapper around Node streams.Transform (Streams2) to avoid explicit subclassing noise
var http = require("http");//Module http
//var fs = require("fs");

var port =  process.argv[2];// Proccess is an array containing the command line arguments.

var server = http.createServer(function(req,res){// Create server
   console.log('Connected');
   req.pipe(map(function (chunk) {//Pipe reads the data source and writes the destination without managing the stream alone.
       return chunk.toString().toUpperCase();
   })).pipe(res);
  
});
server.listen(port);//Port of the  server 

//Test Solved!
/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    var map = require('through2-map')
    
    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))

────────────────────────────────────────────────────────────────────────────────
*/