const { log } = require('console');
const http = require('http');

const server = http.createServer( (req, res) => {
    // console.log(req.method);
    console.log(req.url);
    const url = req.url;
    // homepage
    if(url === '/') {
        res.writeHead(200, {'content-type': 'text/html'}); 
        res.write('<h1>Hi There !!!!</h1>');
        res.end();
    }
    // about page
    else if(url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'}); 
        res.write('<h1>About Page</h1>');
        res.end();
    } 
    // 404 Error page not found
    else {
        res.writeHead(404, {'content-type': 'text/html'}); 
        res.write('<h1>404 Error Page Not Found !!!!</h1>');
        res.end();
    }

})

server.listen(5000);