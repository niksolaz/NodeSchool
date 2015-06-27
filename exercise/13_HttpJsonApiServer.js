var http = require("http");
var url = require("url");
var strftime = require("strftime");

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

var server = http.createServer(function(req,res){
    console.log('Connected');
    var path = url.parse(req.url,true);
    var date = new Date();
    var nowJsonTime = jsonTime(date.getHours(strftime('%H'))) + ':'
                      jsonTime(date.getMinutes(strftime('%M'))) + ':'
                      jsonTime(date.getSeconds(strftime('%S'))) + '\n';
    var nowUnixTime = unixTime(date.getTime(strftime('%L')));
    if(/^\/api\/parsetime/.test(path) ){
        return jsonTime(date);
    }else if(/^\/api\/unixtime/.test(path)){
        return unixTime(date);
    }
});
server.listen(Number(port));