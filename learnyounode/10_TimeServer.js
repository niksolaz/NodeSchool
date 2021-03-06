var net = require("net");//The net module provides you with an asynchronous network wrapper.
var strftime = require("strftime")//module strfile
var portNumber = process.argv[2];// Proccess is an array containing the command line arguments.

function now(x) { return x < 10 ? '0' + x:x}

var date = new Date() // time display
var nowDate = date.getFullYear(strftime('%Y')) + '-'
              + now(date.getMonth(strftime('%m'))+ 1) + '-'
              + now(date.getDate(strftime('%d'))) + ' '
              + now(date.getHours(strftime('%H'))) + ':'
              + now(date.getMinutes(strftime('%M'))) + '\n';

var server = net.createServer(function(socket){ // Connection listener. Creates a new TCP server.
   
    //socket handling logic
    socket.write('',date);
    socket.end(nowDate)
});
server.listen(portNumber);

// Test Solved!

/*
OFFICIAL SOLUTION
────────────────────────────────────────────────────────────────────────────────
    var net = require('net')
    
    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))

────────────────────────────────────────────────────────────────────────────────
*/