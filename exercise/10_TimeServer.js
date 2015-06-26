var net = require("net");

var portNumber = process.argv[2];

var server = net.createServer(function(socket){ // connection listener
    console.log('client connected');
    //socket handling logic
    socket.write('Echo server\r\n');
    socket.end()
});
server.listen(portNumber);