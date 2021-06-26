const jwt = require("jwt-simple");
const moment = require("moment");
require("dotenv").config();
const {  EXPIRATION_TIME,EXPIRATION_MINUTES } =require('../const/const')

exports.createToken = (user) => {
  const payload = {
    id: user.id,
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
    createAt: moment().unix(),
    expireAt: moment().add(EXPIRATION_TIME, EXPIRATION_MINUTES).unix(),
  };
  return jwt.encode(payload, process.env.SECRET);
};

exports.decodedToken = function(token){
    return jwt.decode(token, process.env.SECRET, true)
}