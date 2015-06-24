var http = require("http");
var bl = require("bl");


var Data = process.argv[2];


http.get(Data,function(response){
    response.setEncoding('utf8');
    response.pipe(bl(function(err,data){
        if(err) throw err;
        console.log(data);
        
    }));
});