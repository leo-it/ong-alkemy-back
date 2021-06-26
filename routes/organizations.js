var express = require("express");
var router = express.Router();

const controllerGetOrganizationDataPublic = require("../controllers/controllerGetOrganizationDataPublic/controllerGetOrganizationDataPublic");

router.get("/:organizationId/public",controllerGetOrganizationDataPublic.get);

module.exports = router;
