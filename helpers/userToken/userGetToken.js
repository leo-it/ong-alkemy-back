const jwt = require('jsonwebtoken')
require('dotenv').config();

exports.getToken = (user) => {
  return jwt.sign({ data: user, expiresIn: '2h' }, process.env.AUTH_ME_TOKEN_KEY)
};