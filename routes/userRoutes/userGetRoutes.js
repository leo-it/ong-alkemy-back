const express = require('express')
const router = express.Router()
const userGetController = require('../../controllers/userControllers/userGetController')
const { autentificarAdmin } = require('../../helpers/middlewareAdmin')

router.get('/', /*autentificarAdmin*/ userGetController.userGetController)

module.exports = router