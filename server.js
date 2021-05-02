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

let userlist = [];

// SOCKET.IO
io.on('connection', (socket) => {
  console.log('a user has connected ' + socket.id);
  userlist.push({
    userID: socket.id,
    colour: colourlist[userlist.length - 1]
  });

  console.log(userlist);

  socket.on('hexClick', (hex) => {
    console.log(hex);
    io.emit('clickAnnounced', hex, socket.id);
  })

  socket.on('disconnect', () => {
    console.log('user has disconnected');
  });
});



// SERVER LISTENING
server.listen(8000, () => {
  console.log('listening on *:8000');
});