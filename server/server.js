const express = require('express');
const socketIO = require('socket.io')
const path = require('path');
const http = require('http')

const app = express();
let server = http.createServer(app);


const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

module.exports.IO = socketIO(server)
require('./sockets/socket')


server.listen(port, (err) => {
  if (err) throw new Error(err);
  console.log(`Servidor corriendo en puerto ${port}`);
});