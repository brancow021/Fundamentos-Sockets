const { IO } = require('../server')

IO.on('connection', (client) => {
  console.log('usuario conectado')

  client.emit('enviarMensaje', {
    usuario: 'administrador',
    mensaje: 'bienvenido a esta aplicacion'
  })

  client.on('disconnect', () => {
    console.log('usuario disconectado')
  })

  // escuchar el cliente
  client.on('enviarMensaje', (data, callback) => {
    console.log(data)

    client.broadcast.emit('enviarMensaje', data)

    // if(mensaje.usuario){
    //   callback({
    //     resp: 'TODO SALIO BIEN'
    //   })
      
    // }else{
    //   callback({
    //     resp: 'todo salio mal'
    //   })
    // }
  })
})