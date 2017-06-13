var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.port || 5000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.on('chat message', function(msg){
      io.emit('chat message', msg);
  });
});