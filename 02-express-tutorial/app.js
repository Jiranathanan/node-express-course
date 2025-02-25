const { readFileSync } = require('fs');
const http = require('http');

// get all files
// const homepage = readFileSync('./index.html');
const homepage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeLogo = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer( (req, res) => {
    // console.log(req.method);
    console.log(req.url);
    const url = req.url;
    // homepage
    if(url === '/') {
        res.writeHead(200, {'content-type': 'text/html'}); 
        res.write(homepage);
        res.end();
    }
    // about page
    else if(url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'}); 
        res.write('<h1>About Page</h1>');
        res.end();
    } 
    // styles
    else if(url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'} );
        res.write(homeStyles);
        res.end();
    }
    // logo
    else if(url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'}); 
        res.write(homeLogo);
        res.end();
    }
    // Logic
    else if(url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(homeLogic);
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