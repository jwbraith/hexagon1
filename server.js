const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

server.listen(8000, () => {
  console.log('listening on *:8000');
})