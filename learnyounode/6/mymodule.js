
var fs = require('fs')
var path = require('path')
//Creating module 
module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {//Reads the contents of a directory. Asynchronous.
    if (err)
      return callback(err)
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    list = list.filter(function (file) {
//Return the extension of the path, from the last '.' to end of string in the last portion of the path.      
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}