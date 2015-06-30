var filterFn = require('./mymodule.js') // Call  own module
var dir = process.argv[2] // Proccess is an array containing the command line arguments
/*The first element will be 'node', 
the second element will be the name of the JavaScript file. 
The next elements will be any additional command line argument.
PROCESS.ARGV[NODE,FILE,ELEMENT,...ELEMENT..]*/
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})