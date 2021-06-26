const postContactQuery = require('../../query/contactsQuery/postContact');
const { validationResult } = require('express-validator/check');
const { QUERY_MESSAGE_SUCCESS } = require('../../const/const');


const postContactController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    try {
      const contact =  await postContactQuery (req.body);
      return res.status(200).json({data: contact, message: QUERY_MESSAGE_SUCCESS})
    } catch (err) {
      return res.status(500).json ({message: err});
    }
  }
}

module.exports = postContactController;