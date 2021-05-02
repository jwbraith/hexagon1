const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

// SERVING STATIC FILES (SCRIPT, CSS)
app.use(express.static('public'));

// GET REQUESTS
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

let colourlist = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

let userlist = new Map();

// SOCKET.IO
io.on('connection', (socket) => {
  console.log('a user has connected ' + socket.id);
  console.log('number of connected users is ' + userlist.size);
  userlist.set(socket.id, colourlist[userlist.size]);

  console.log(userlist);

  socket.on('hexClick', (hex) => {
    console.log(userlist.get(socket.id));
    console.log(hex);
    io.emit('clickAnnounced', hex, userlist.get(socket.id));
  })

  socket.on('disconnect', () => {
    console.log('user has disconnected');
    userlist.delete(socket.id);
    console.log("number of connected users is " + userlist.size);
    console.log(userlist);
  });
});



// SERVER LISTENING
server.listen(8000, () => {
  console.log('listening on *:8000');
});