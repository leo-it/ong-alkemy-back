const Contacts = require("../../modelsConections/contactsModelConection");

const getContact = () => {
  return Contacts.findAll();
};

module.exports = getContact;
