var Http = require("http"); //Call Module http

var data = process.argv[2];// Proccess is an array containing the command line arguments

Http.get(data,function (response) {
    response.setEncoding('utf8');
    // EventEmitter: Adds a listener to the end of the listeners array for the specified event.
    response.on('data',console.log); 
    response.on('end',console.log);
    response.on('error',console.error);
});

//Test Passed!    
    
/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    })

────────────────────────────────────────────────────────────────────────────────
*/