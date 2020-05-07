const http = require('http');
var closeServer = false;
const fs = require('fs');
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
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //process.exit(); // con esto detengo el proceso de event loop.
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title> Enter Message </title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit"> Enviar </form></body>');
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk); //agrego con el push
        });
        req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString(); // paso a string el body
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) =>{
                res.statusCode = 302; //numero aceptado por el navegador
                res.setHeader('Location','/'); //indicamos donde quiero dejar el archivo en este caso la raiz.
                return res.end();
            }); //writeFileSync se ejcuta de manera sincrona, writeFile permite q se ejecute lo de abajo sin terminar de ejecutarse este. 
        });
    }
    closeServer = true;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My first Page </title><head>');
    res.write('<body><h1> My first Page on NodeJS Server</h1></body>');
    res.write('</html>');
    res.end();
    
});

if(!closeServer)
    server.listen(3000);
else{
    server.close();
    console.log("Server is closed");
}