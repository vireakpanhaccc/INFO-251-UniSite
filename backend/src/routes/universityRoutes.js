const express = require("express");
const { getAllUniversities } = require("../controllers/universityController");
const {isAuthenticated} = require("../middlewares/permissionMiddleware");
const uniRouter = express.Router();

// uniRouter.use(isAuthenticated);

uniRouter.get("/", getAllUniversities)


module.exports = uniRouter;