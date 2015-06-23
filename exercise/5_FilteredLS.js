var fs = require("fs");

var path = require("path");
var File = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(File,function(err,data){
    if(err){
        throw err
    }
    data.forEach(function(file){
        var extEnd = path.extname(file);
        if(extEnd === ext){
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