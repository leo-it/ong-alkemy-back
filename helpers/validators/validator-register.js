const { validationResult, check } = require('express-validator');
const { INVALID_EMAIL, INVALID_PASS_TOOSHORT } = require('../../const/const');


exports.validation = ( req, res , next ) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    next();
}

exports.ValidationsHelper = [
  check('email', INVALID_EMAIL).exists().isEmail(),
  check('password', INVALID_PASS_TOOSHORT).exists().notEmpty().isLength({ min: 6 })
];