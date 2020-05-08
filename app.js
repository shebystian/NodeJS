const http = require('http');

//var closeServer = false;

//const fs = require('fs');

const routes = require('./routes'); // importo routes.js de la raiz

console.log("Server now listen");

/*
function rqListener(req, res){
}

http.createServer(rqListener);
//eso es lo mismo que esto:

http.createServer(function(req, res){
});
//eso es lo mismo que esto:

http.createServer((req,res) => {
    console.log(req);
});
*/
//ahora debo crear una variable constante para almacenar el servidor creado:

/*
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //process.exit(); // con esto detengo el proceso de event loop.
    
});
*/

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);

/*
if(!closeServer)
    server.listen(3000);
else{
    server.close();
    console.log("Server is closed");
}*/