var express = require('express');
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("Server running on port 3000");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log("New Connection: " + socket.id);

    socket.on('mouse', mouseMsg);

    function mouseMsg(data) {
    	socket.broadcast.emit('mouse', data);
    	// io.sockets.emit('mouse', data); // this sends the message back out to the global socket (ie all connections)
    	console.log(data);
    }


}