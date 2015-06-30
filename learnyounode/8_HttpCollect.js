
var Http =  require('http'); // Module Http
var bl = require("bl"); // Module Buffe List: bl is a storage object for collections of Node Buffers. 

var Data = process.argv[2];// Proccess is an array containing the command line arguments

Http.get(Data,function(response){//Method request that calls req.end() automatically.
    response.setEncoding('utf8');
//Pipe reads the data source and writes the destination without managing the stream alone.
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