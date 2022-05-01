// Dependencies
const createError = require('http-errors');

// Function Definition
const defaultErrorHandler = (err, req, res, next) => {
    if (err) {
        res.status(err.status || 500);
        res.send({
            error: err.message
        });
    }

    else {
        res.status(500);
        res.send({
            error: 'There was a server side error'
        });
    };
};

// Export
module.exports = defaultErrorHandler;