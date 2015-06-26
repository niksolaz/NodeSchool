var net = require("net");
var strftime = require("strftime")
var portNumber = process.argv[2];

var date = new Date()

var Y = date.getFullYear(strftime('%Y'));
var m = date.getMonth(strftime('%m'));
var d = date.getDate(strftime('%d'));
var H = date.getHours(strftime('%H'));
var M = date.getMinutes(strftime('M'));

var server = net.createServer(function(socket){ // connection listener
    console.log('%d-%d-%d %d:%d',Y,m,d,H,M);
    //socket handling logic
    socket.write(date);
    socket.end()
});
server.listen(portNumber);