var express=require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname));
app.get('/whiteboard', function(req, res){
  res.redirect("whiteboard.html");
});

io.on('connection', function(socket){
     
     socket.on('data', function(msg){
     
    io.emit('data1', msg);
  });
         socket.on('clear', function(msg){
     
    io.emit('data2', msg);
  });
});

http.listen(8080,'127.0.0.1');