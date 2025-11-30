const express = require('express');
const { getAllMajors, getMajorDetails} = require('../controllers/MajorController');
const majorRouter = express.Router();

majorRouter.get('/', getAllMajors);
majorRouter.get('/:id', getMajorDetails);

module.exports = majorRouter;