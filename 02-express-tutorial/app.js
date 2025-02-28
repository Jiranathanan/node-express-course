const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

// req => middleware => res 
// apply to those route below
// app.use(logger);

// for multiple middleware, put them in an array
app.use([logger, authorize]);

// apply to '/api' and sub
// app.use('/api', logger);

app.get('/', (req, res) => {
    res.send('home');
})

app.get('/about', (req, res) => {
    res.send('about');
})

app.get('/api/products', (req, res) => {
    res.send('Products');
})

app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.send('Items');
})






app.listen( 5000, () => {
    console.log('Server is listening on port 5000....');
})