var http = require('http');// Module http

// Proccess is an array containing the command line arguments.
/*The first element will be 'node', 
the second element will be the name of the JavaScript file. 
The next elements will be any additional command line argument.
PROCESS.ARGV[NODE,FILE,ELEMENT,...ELEMENT..]*/
var urls = [process.argv[2], process.argv[3], process.argv[4]];

function printResponseData(urls, n){ // function recursive
    if (n > urls.length-1){// Condition 
        return;
    }
    http.get(urls[n], function(res) {
      res.setEncoding('utf8');
      var body = '';
      res.on('data', function(chunk) {
        body += chunk;
      });
      res.on('end', function() {
            console.log(body.toString());
            printResponseData(urls, n+1);
      });
    }); 
}
printResponseData(urls, 0);

/*
Solutions
________________________________________________________________________
    var bl = require('bl')    
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)
    
          results[index] = data.toString()
          count++
    
          if (count == 3)
            printResults()
        }))
      })
    }
    
    for (var i = 0; i < 3; i++)
      httpGet(i)

────────────────────────────────────────────────────────────────────────────────
*/
