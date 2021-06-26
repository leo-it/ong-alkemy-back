const express = require('express');
const router = express.Router();
const UserDeleteController = require ('../../controllers/userControllers/UserDeleteController');


router.delete('/users/:id', UserDeleteController);

module.exports = router;
