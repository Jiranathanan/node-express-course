
const logger = ( req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log('Method:',method,'\nURL:', url, '\nTime:', time);
    // res.send('Testing')
    next();
}

module.exports = logger;