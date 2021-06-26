const Organizations = require("../modelsConections/organizationModelConections");
const Media = require('../modelsConections/mediaModelConnection')

const getOrganizationDataPublic = (organizationId) => {
  return Organizations.findOne({ 
    where: { id: organizationId } ,
    include: { model: Media, attributes: ['facebook','instagram', 'linkedin'] }, 
    attributes: { exclude: ['id','createdAt', 'updatedAt'] }},);
};

module.exports = getOrganizationDataPublic;
