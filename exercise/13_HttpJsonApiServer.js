var http = require("http");
var url = require("url");

var port = process.argv[2];

function jsonTime(time){
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixTime(time){
    return { unixtime: time.getTime()}
}

var server = http.createServer(req,res){
    
}
server.listen(Number(port));