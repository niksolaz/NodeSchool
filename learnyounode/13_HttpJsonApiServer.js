var http = require("http");//Module http
var url = require("url");//Module url


var port = process.argv[2];// Proccess is an array containing the command line arguments.
var result;

function jsonTime(time){
    return {   //return a format time
        hour: time.getHours(),// get hour
        minute: time.getMinutes(),// get minute
        second: time.getSeconds()// get second
    }
}

function unixTime(date){
    return {unixtime: date.getTime()};//get time in milliseconds
}

var server = http.createServer(function(req,res){// Create server
    console.log('Connected');
    var path = url.parse(req.url,true);//Take a URL string, and return an object.
    var date = new Date(path.query.iso);//Create an ISO object
    
    
    //pathname: the path section of the URL, that comes after the host and before the query, including the initial slash if present.
    if(/^\/api\/parsetime/.test(path.pathname) ){
        result =  jsonTime(date);
    }else if(/^\/api\/unixtime/.test(path.pathname)){
        result = unixTime(date);
    }
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })//Sends a response header to the request.
        res.end(JSON.stringify(result))
        
    } else {
        res.writeHead(404)//Sends a response header to the request.
        res.end()
       
    }
});
server.listen(Number(port));//Port of the  server 