const express = require("express");
const { getAllUniversities } = require("../controllers/universityController");
const uniRouter = express.Router();

uniRouter.get("/", getAllUniversities)


module.exports = uniRouter;