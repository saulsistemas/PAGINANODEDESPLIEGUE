const http = require('http');
//request  = solicitud que esta solicitando por parte del cliente
//response = lo que yo le voy a responder
const server = http.createServer(function(request, response){


    response.write('Hola mundo' );

    response.end()
}).listen(8080);

console.log("escuchando en el puerto ", 8080);
