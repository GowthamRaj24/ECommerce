const express = require('express');
const routes = express.Router();
const addOrder = require('../controllers/orders/addOrder');
const addCoupon = require('../controllers/orders/addCoupon');
const validateCoupon = require('../controllers/orders/validateCoupon');

routes
    .post('/addOrder', addOrder.addOrder)
    .post('/validateCoupon' , validateCoupon.validateCoupon)
    .post('/addCoupon' , addCoupon.addCoupon);

exports.route = routes;