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
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //process.exit(); // con esto detengo el proceso de event loop.
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My first Page </title><head>');
    res.write('<body><h1> My first Page on NodeJS Server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
