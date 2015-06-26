var net = require("net");
//var strftime = require("strttime")
var portNumber = process.argv[2];

var date = new Date()

var Y = date.getFullYear('YYYY');
var m = date.getMonth('mm');
var d = date.getDate('dd');
var H = date.getHours('HH');
var M = date.getMinutes('MM');

var server = net.createServer(function(socket){ // connection listener
    console.log('%d-%d-%d %d:%d',Y,m,d,H,M);
    //socket handling logic
    socket.write(date);
    socket.end()
});
server.listen(portNumber);