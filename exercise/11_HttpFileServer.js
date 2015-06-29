var http = require("http");// Module http
var fs = require("fs"); //Module fs ... Accessing the File System in Node.Js


var port = process.argv[2];// Proccess is an array containing the command line arguments.
var file =process.argv[3];

var server = http.createServer(function (req,res){// Create server
    console.log('Connected');
    
    var read = fs.createReadStream(file);//Returns a new ReadStream object (See Readable Stream).
    read.pipe(res);////Pipe reads the data source and writes the destination without managing the stream alone.
})
server.listen(Number(port));//Port of the  server 

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