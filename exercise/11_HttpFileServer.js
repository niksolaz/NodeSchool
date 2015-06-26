var http = require("http");
var fs = require("fs");


var port = process.argv[2];

var server = http.createServer(function (req,res){
    console.log('Connected');
    var file =__dirname + process.argv[3];
    console.log('file: ',file);
    var read = fs.createReadStream(file,function(response){
                read.pipe(function(err,data){
                    if(err) return console.error('Error: ',err.message);
                    read.on('open',console.log);
                });
    });
})
server.listen(Number(port));