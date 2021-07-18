
const redisClient = require('./signin').redisClient;

const handleLogout = (req, res) => {
    const { authorization } = req.headers;
    if(!authorization){
        return res.status(401).json('Unauthorized');
    }
    redisClient.del(authorization, (err, reply) => {
        if (err || !reply) {
            return status(400).json('Unauthorized')
        }
        // console.log(`Auth: ${authorization}`)
        return res.status(200).json('Success')
    })
}


module.exports = {
    handleLogout: handleLogout
}