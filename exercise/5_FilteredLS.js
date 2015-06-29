var fs = require("fs"); //Module fs ... Accessing the File System in Node.Js
var path = require("path");// Module path. This module contains utilities for handling and transforming file paths.

var File = process.argv[2];// Proccess is an array containing the command line arguments
/*The first element will be 'node', 
the second element will be the name of the JavaScript file. 
The next elements will be any additional command line argument.
PROCESS.ARGV[NODE,FILE,ELEMENT,...ELEMENT..]*/
var ext = '.' + process.argv[3];

fs.readdir(File,function(err,data){ //Reads the contents of a directory. Asynchronous.
    if(err){
        throw err
    }
    data.forEach(function(file){
    //Return the extension of the path, from the last '.' to end of string in the last portion of the path.    
        var extEnd = path.extname(file);
        if(extEnd === ext){ // Condition
            console.log(file);
        }
    });
});

//Test Passed!
/*
>>>>>>>Official Solution<<<<<<<<<<<<<
>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<

var fs = require('fs')
var path = require('path')
    
fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })

>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<
*/