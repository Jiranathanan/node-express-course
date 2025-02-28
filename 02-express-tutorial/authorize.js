const authorize = (req, res, next) => {
    const { user } = req.query;
    if(user === 'john') {
        req.user = {name: 'john', id:3}; // hard code, in real we will get data from db
        next();
    } else {
        res.status(401).send('Unauthorized')
    } 
}

module.exports = authorize;