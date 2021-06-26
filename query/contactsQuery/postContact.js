const Contacts  = require('../../modelsConections/contactsModelConection');

const postContactQuery = (payload) => {
  return Contacts.create (payload);
}

module.exports = postContactQuery;