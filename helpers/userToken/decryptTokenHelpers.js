const { INVALID_TOKEN, NO_TOKEN } = require('../../const/const');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getTokenInfo = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token){
    return res.status(401).json({
      auth: false,
      message: NO_TOKEN
    });
  }

  jwt.verify (token, process.env.AUTH_ME_TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        auth: false,
        message: INVALID_TOKEN
      });
    }
    
    return res.status(200).json(decoded);
  });
}

module.exports = { getTokenInfo };