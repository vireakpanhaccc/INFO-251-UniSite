const express = require("express");
const { getPopularUniversities, getPopularMajors, getPopularScholarships } = require("../controllers/homeController");
const homeRouter = express.Router();

homeRouter.get("/popular/universities", getPopularUniversities);
homeRouter.get("/popular/majors", getPopularMajors);
homeRouter.get("/popular/scholarships", getPopularScholarships);

module.exports = homeRouter;