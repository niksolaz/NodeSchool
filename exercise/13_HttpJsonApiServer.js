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

function unixTime(date){
    return {unixtime: date.getTime()};
}

var server = http.createServer(function(req,res){
    console.log('Connected');
    var path = url.parse(req.url,true);
    var date = new Date(path.query.iso);
    var result;
    
    if(/^\/api\/parsetime/.test(path.pathname) ){
        result =  jsonTime(date);
    }else if(/^\/api\/unixtime/.test(path.pathname)){
        result = unixTime(date);
    }
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
        
    } else {
        res.writeHead(404)
        res.end()
       
    }
});
server.listen(Number(port));