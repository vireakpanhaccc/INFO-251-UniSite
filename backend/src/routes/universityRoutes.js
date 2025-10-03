const express = require("express");
const { getAllUniversities } = require("../controllers/universityController");
const { getUniversityDetails } = require("../controllers/universityController");
const {isAuthenticated} = require("../middlewares/permissionMiddleware");
const uniRouter = express.Router();

uniRouter.use("/:id", isAuthenticated);

uniRouter.get("/", getAllUniversities);
uniRouter.get("/:id", getUniversityDetails);

module.exports = uniRouter;