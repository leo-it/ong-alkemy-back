const Members = require("../../modelsConections/memberModelConnection");

const getMembers = () => {
  return Members.findAll();
};

module.exports = getMembers;
