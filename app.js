const express = require('express'); //import
const socket = require('socket.io');

const app = express(); // initialize and server ready

app.use(express.static('public'));

let port = process.env.PORT || 3000;
let server = app.listen(port, () => {
  console.log('listening to port', port);
});

let io = socket(server);

io.on('connection', (socket) => {
  console.log('established conection');

  //Received data
  socket.on('beginPath', (data) => {
    // data -> data from frontend

    //Transfer data to all connected computers
    io.sockets.emit('beginPath', data);
  });

  socket.on('drawStroke', (data) => {
    // data -> data from frontend

    //Transfer data to all connected computers
    io.sockets.emit('drawStroke', data);
  });

  socket.on('redoUndo', (data) => {
    // data -> data from frontend

    //Transfer data to all connected computers
    io.sockets.emit('redoUndo', data);
  });
});
