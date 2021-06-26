const validationJwt = require('../../helpers/userToken/decryptTokenHelpers');
var router = require('express').Router();

router.get('/me', validationJwt.getTokenInfo);

module.exports = router;