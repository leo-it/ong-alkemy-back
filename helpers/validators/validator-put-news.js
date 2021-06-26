const { validationResult, check } = require("express-validator");
const {
  INVALID_NAME,
  INVALID_CATEGORY_ID,
  INVALID_CONTENT,
  INVALID_TYPE,
  INVALID_IMAGE
} = require("../../const/const");

exports.ValidationsHelper = [
  check("name", INVALID_NAME).exists(),
  check("content", INVALID_CONTENT).exists(),
  check("image", INVALID_IMAGE).exists(),
  check("categoryId", INVALID_CATEGORY_ID).exists(),
  check("type", INVALID_TYPE).exists(),
];

exports.validationError = ( req, res , next ) =>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  next();
}
