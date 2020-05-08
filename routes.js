const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.write('<html>');
        res.write('<head><title> Enter Message </title></head>');
        res.write(
            '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit"> Enviar </form></body>'
            );
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk); //agrego con el push
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); // paso a string el body
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err =>{
                res.statusCode = 302; //numero aceptado por el navegador
                res.setHeader('Location','/'); //indicamos donde quiero dejar el archivo en este caso la raiz.
                return res.end();
            }); //writeFileSync se ejcuta de manera sincrona, writeFile permite q se ejecute lo de abajo sin terminar de ejecutarse este. 
        });
    }

    //closeServer = true;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My first Page </title><head>');
    res.write('<body><h1> My first Page on NodeJS Server</h1></body>');
    res.write('</html>');
    res.end();
    
};

/*module.exports = {
    handler : requestHandler,
    someText: 'Some hard coded text'
};  //para exportar este controlador
*/
//ó
/*module.exports.handler = requestHandler;
module.exports.someText = 'Some hard coded text';
*/
//ó
exports.handler = requestHandler;
exports.someText = 'Some hard coded text';
