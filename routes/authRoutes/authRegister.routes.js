var express = require('express');
const { register } = require('../../controllers/users');
const { ValidationsHelper, validation } = require('../../helpers/validators/validator-register');
var router = express.Router();

router.post('/register', ValidationsHelper, validation, register);

module.exports = router;
