var express = require("express"),
    app = require('express')(),
    redis = require("redis"),
    client = redis.createClient(),
    methodOverride = require("method-override"),
    bodyParser = require("body-parser"),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    $ = require('jquery');



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// Uncomment below if you want to include css/js/imgs -> make a folder and use:
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.render(__dirname + '/views/index.ejs');
});




io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    client.lpush("messages", msg);
  });
});


http.listen(3000, function() {
  console.log("Server started on port 3000");
});