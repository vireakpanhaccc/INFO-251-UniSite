const express = require('express');
const { getAllScholarships } = require('../controllers/opportunityController');
const opportunityRouter = express.Router();

opportunityRouter.get('/scholarships', getAllScholarships);

module.exports = opportunityRouter;