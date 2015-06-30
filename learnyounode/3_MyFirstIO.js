var fs = require("fs"); //Module fs

var file = process.argv[2]; //Proccess is an array containing the command line arguments.
var buf = fs.readFileSync(file,{encoding:'utf8'});// fs.readFileSYnc: returns the contents of the filename

var str = buf.toString(); //Content is a string
console.log(str.split('\n').length - 1);

// Test Passed!
/*
>>>>the official solution<<<<
>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<

var fs = require('fs')
    
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)


>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1


*/