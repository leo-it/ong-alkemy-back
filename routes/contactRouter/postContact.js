const router = require('express').Router();
const { check } = require('express-validator/check');
const { MESSAGE_NO_NAME_OR_EMAIL } = require('../../const/const');

const postContactController = require ('../../controllers/contactsControllers/postContactController');

router.post('/', [
    check('name').not().isEmpty().withMessage(MESSAGE_NO_NAME_OR_EMAIL),
    check('email').not().isEmpty().withMessage(MESSAGE_NO_NAME_OR_EMAIL),
  ], 
  postContactController);

module.exports = router;