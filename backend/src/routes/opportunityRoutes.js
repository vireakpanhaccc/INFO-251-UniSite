const express = require('express');
const { getAllScholarships, getScholarshipById } = require('../controllers/opportunityController');
const opportunityRouter = express.Router();

opportunityRouter.get('/scholarships', getAllScholarships);
opportunityRouter.get('/scholarships/:id', getScholarshipById);

module.exports = opportunityRouter;