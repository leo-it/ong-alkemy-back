const { check } = require('express-validator');
const { INVALID_NAME } = require('../../const/const');

exports.membersValidator = [
    check('name', INVALID_NAME).exists({checkFalsy: true}, {checkNull: true}).notEmpty().isString()
]