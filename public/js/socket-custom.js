var socket = io();
socket.on('connect', () => {
  console.log('conectado al servidor')
})

socket.on('disconnect', () => {
  console.log('perdimos conexion con el servidor')
})

socket.emit('enviarMensaje', {
  usuario: 'Brando Rodriguez',
  mensaje: 'Hola mundo'
}, (res) => {
  console.log('Respuesta server',res)
})

//ESCUCHAR INFORMACION
socket.on('enviarMensaje', (res) => {
  console.log('Servidor', res)
})