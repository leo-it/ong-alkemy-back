const express = require('express');
const router = express.Router();
const PutMembersController = require ('../../controllers/MembersControllers/PutMembersController');


router.put('/members/:id', PutMembersController);

module.exports = router;
