let socket = io();

socket.on('connect', function(){
    console.log('Conectado al servidor');
});

// Escuchar
socket.on('disconnect', function(){
    console.log('Desconectado del servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Miguel',
    mensaje: 'Hola'
}, function ( resp ) {
    console.log('Respuesta server: ',resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje){
    console.log(mensaje);
});
