const express = require("express");
const router = express.Router();

const  deleteNews  = require('../../controllers/newsControllers/DeleteNews.controllers');

router.delete('/delete/:id', deleteNews);

module.exports = router;