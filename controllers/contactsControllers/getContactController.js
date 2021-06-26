const express = require("express");
const getContactQuery = require("../../query/contactsQuery/getContact");

const {
  GET_MESSAGE_CONTACTS,
  GET_MESSAGE_CONTACTS_ERROR,
} = require("../../const/const");
const getContactController = async (req, res, next) => {
  try {
    const contacts = await getContactQuery();
    if (contacts) {
      res.status(200).json({
        data: contacts,
        message: GET_MESSAGE_CONTACTS,
      });
    } else {
      res.status(404).json({
        message: GET_MESSAGE_CONTACTS_ERROR,
      });
    }
  } catch (error) {
    res.status(404).json({error: error})
  }
};
module.exports = getContactController;
