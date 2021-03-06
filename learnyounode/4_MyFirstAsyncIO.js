var fs = require("fs"); // Module fs
var file = process.argv[2]; // Proccess is an array containing the command line arguments.

//Asynchronously reads the entire contents of a file
fs.readFile(file,{encoding:'utf8'},function(err,data){ 
    if(err) throw err; 
    console.log(data.toString().split('\n').length -1);
});

// Test Passed!

/*
>>>>>>>Official Solution<<<<<<<<<<<<
>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<

var fs = require('fs')
var file = process.argv[2]
    
fs.readFile(file, function (err, contents) {
      >>>>// fs.readFile(file, 'utf8', callback) can also be used <<<<
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
    
>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<
*/