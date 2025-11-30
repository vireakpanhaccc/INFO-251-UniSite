const express = require('express');
const { getAllMajors,MajorById} = require('../controllers/MajorController');
const majorRouter = express.Router();

majorRouter.get('/', getAllMajors);
majorRouter.get('/majors/:id', MajorById);

module.exports = majorRouter;