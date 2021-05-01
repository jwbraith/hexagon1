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
})

// SOCKET.IO
io.on('connection', (socket) => {
  console.log('a user has connected');
})

server.listen(8000, () => {
  console.log('listening on *:8000');
})