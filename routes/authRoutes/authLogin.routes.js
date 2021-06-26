var express = require('express');
const { ValidationsHelper, validation } = require('../../helpers/validators/validator-register');
const loginController = require('../../controllers/userControllers/UserLoginController')
var router = express.Router();

router.post('/login', ValidationsHelper, validation, loginController.UserLoginController);
  
module.exports = router;
