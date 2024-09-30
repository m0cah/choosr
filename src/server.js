
//Express and Socket Boilerplate, stolen from docs
const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const app = express()
const server = http.createServer(app)
// Enable CORS so that I can actually send and receive requests without errors.
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

//0 initial connections
let peopleConnected = 0;

io.on('connection', (socket) => {
 
  peopleConnected++;
  
  console.log("Someone Joined! Connected Users: " + peopleConnected);
  

  //This decides which initial web page is shown
  if (peopleConnected === 1) {
    socket.emit('user-status', { isFirstUser: true });
  } else {
    socket.emit('user-status', { isFirstUser: false });
  }
  console.log("Emitted to Client!");


  //Handle disconnects?
  io.on('disconnect', (scoket) => {
    peopleConnected--;
    console.log('Someone Left D:');
  })
})

//start server
server.listen(3001, () => {
  console.log("Magic happens on port 3001 ^_^");
})


