
var Http =  require('http');
var bl = require("bl");

var Data = process.argv[2];

Http.get(Data,function(response){
    response.setEncoding('utf8');
    response.pipe(bl(function(err,data){
        if(err) throw err;
        console.log(data.length);
        console.log(data.toString());
    }));
});

//Test Passed!

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))  
    })

────────────────────────────────────────────────────────────────────────────────

*/