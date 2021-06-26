const express = require("express");
const router = express.Router();

const deleteCategory = require('../../controllers/categoryControllers/DeleteCategory.controllers');

router.delete('/:id', deleteCategory);

module.exports = router;