const express = require('express');
const app = express();
const logger = require('./logger');

// req => middleware => res 
// apply to those route below
// app.use(logger);

// apply to '/api' and sub
app.use('/api', logger);

app.get('/', (req, res) => {
    res.send('home');
})

app.get('/about', (req, res) => {
    res.send('about');
})






app.listen( 5000, () => {
    console.log('Server is listening on port 5000....');
})