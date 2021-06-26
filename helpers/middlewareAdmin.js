const jwt = require('jsonwebtoken');
const {
    KEY_ADMIN,
    ROLE_ID_ADMIN,
    NO_TOKEN,
    INVALID_TOKEN,
    USER_NOT_ALLOWED
} = require('../const/const')

const autentificarAdmin = (req, res, next) => {

    const jwtToken = req.headers.authorization;
    //requering headers from the routes
    if (!jwtToken) {
        return res.status(401).json({ message: NO_TOKEN });
    }
    const key = KEY_ADMIN;
    const jwtClient = jwtToken.split(" ")[1];
    jwt.verify(jwtClient, key, (error, decoded) => {
        // decoded brings de data encrypted inside the token
        if (error) {
            return res.status(401).json({ message: INVALID_TOKEN });
        }
        //assumin that roleId == 'admin'. Using another table for the role
        if (decoded.roleId == ROLE_ID_ADMIN) {
            next();
        }else{
            return res.status(401).json({message: USER_NOT_ALLOWED})
        }
    });   
  };

  exports.autentificarAdmin = autentificarAdmin