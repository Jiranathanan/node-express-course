const express = require('express');
const app = express();

const { products } = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Homepage</h1> <a href="/api/products">products</a>')
});

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params;
    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    );

    if(!singleProduct) {
        return res.status(404).send('Product does not exist');
    }
    // console.log(singleProduct);
    return res.json(singleProduct);
});







app.listen( 5000, () => {
    console.log('Server is listening on port 5000....');
})