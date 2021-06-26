const { postImageController } = require('../../controllers/imagesController/imagesController')
const express = require('express')
const { awsSDK } = require('../../helpers/services/aws-s3')
const router = express.Router()

router.post('/', awsSDK, postImageController)

module.exports = router