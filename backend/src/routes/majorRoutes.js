const express = require('express');
const { getAllMajors} = require('../controllers/MajorController');
const majorRouter = express.Router();

majorRouter.get('/', getAllMajors);

module.exports = majorRouter;