
// Move redisClient to the server for easier utilization in Signin and authorization
const redisClient = require('../controllers/signin').redisClient;

const requireAuth = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json('Unauthorized');
    }
    return redisClient.get(authorization, (err, reply) => {
        if (err || !reply) {
            return res.status(401).json('Unauthorized');
        }
        else {
        return next();
        }
    })
}

module.exports = {
    requireAuth: requireAuth
}
