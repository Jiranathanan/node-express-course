const express = require('express');
const app = express();

// req => middleware => res 

const logger = ( req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log('Method:',method,'\nURL:', url, '\nTime:', time);
    // res.send('Testing')
    next();
}


app.get('/', logger, (req, res) => {
    res.send('home');
})

app.get('/about', logger, (req, res) => {
    res.send('about');
})






app.listen( 5000, () => {
    console.log('Server is listening on port 5000....');
})