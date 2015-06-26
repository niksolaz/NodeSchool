var http = require("http");
var fs = require("fs");


var port = process.argv[2];
var file =process.argv[3];

var server = http.createServer(function (req,res){
    console.log('Connected');
    
    var read = fs.createReadStream(file);
    read.pipe(res);
})
server.listen(Number(port));

//Test Solved!

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    var fs = require('fs')
    
    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })
    
      fs.createReadStream(process.argv[3]).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))

────────────────────────────────────────────────────────────────────────────────
*/