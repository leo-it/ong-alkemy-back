const { check } = require('express-validator');
const { TESTIMONY_NAME, TESTIMONY_IMAGE, TESTIMONY_CONTENT } = require('../../const/const');

module.exports = {
    PostValidator: [
    check('name', TESTIMONY_NAME).not().isEmpty(),
    check('content', TESTIMONY_CONTENT).not().isEmpty(),
    check('image', TESTIMONY_IMAGE).not().isEmpty()
]
}
