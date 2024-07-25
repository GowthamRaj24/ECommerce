const express = require('express');
const routes = express.Router();

const addReview = require('../controllers/reviews/addReview');

routes
    .post('/addReview', addReview.addReview);

exports.route = routes;