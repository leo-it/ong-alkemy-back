const {
  GET_MESSAGE_ORGANIZATION_ID_ERROR,
  GET_MESSAGE_ORGANIZATION_ID_DATA,
} = require("../../const/const");

const getOrganizationDataPublic = require("../../query/getOrganizationDataPublic");

const controllerGetOrganizationDataPublic = {
  get: async (req, res, next) => {
    const { organizationId } = req.params;
    const organization = await getOrganizationDataPublic(organizationId);
    if (organization) {
      res.status(200).json({
        data: organization,
        message: GET_MESSAGE_ORGANIZATION_ID_DATA,
      });
    } else {
      res.status(404).json({
        message: GET_MESSAGE_ORGANIZATION_ID_ERROR,
      });
    }
  },
};

module.exports = controllerGetOrganizationDataPublic;
