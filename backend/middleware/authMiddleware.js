// middleware.js
const jwt = require('jsonwebtoken');
const secretKey = 'YourSecretKey';
const withAuth = function (req, res, next) {
    const token = req.cookies.token; if (!token) {
        res.status(401).send('Unauthorized: No token provided');
    } else {
        jwt.verify(token, secretKey, function (err, decoded) {
            if (err) {
                res.status(401).send('Unauthorized: Invalid token');
            } else {
                req.email = decoded.email;
                next();
            }
        });
    }
};
module.exports = withAuth;