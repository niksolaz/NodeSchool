var http = require("http");
var fs = require("fs");


var port = process.argv[2];

var server = http.createServer(function (req,res){
    console.log('Connected');
    var file =process.argv[3];
    console.log('file: ',file);
    /*
    var read = fs.createReadStream(file,function(response){
                read.pipe(function(err,data){
                    if(err) return console.error('Error: ',err.message);
                    read.on('open',console.log);
                });
    });
    */
    var read = fs.createReadStream(file);
    read.pipe(res);
})
server.listen(Number(port));