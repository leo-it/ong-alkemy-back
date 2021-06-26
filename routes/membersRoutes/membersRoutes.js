const { postMembersController } = require('../../controllers/membersControllers/postMembersController')
const express = require('express')
const router = express.Router()
const { membersValidator } = require('../../helpers/validators/validatorMembers')

router.post('/', membersValidator, postMembersController)

module.exports = router