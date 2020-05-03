const http = require('http');

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
const server = http.createServer((req,res) => {
    console.log(req);
});

server.listen(3000);
