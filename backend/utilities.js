const jwt = require('jsonwebtoken')

function authenticateToken(req , res , next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token , process.env.ACCESS_TOKEN_SECRET,(err,user) => {
        console.log("JWT Error:", err);
        console.log("Decoded User:", user);
        if(err) return res.sendStatus(401);
        req.user = user;
        next();
    });
}

module.exports = {
    authenticateToken,
};