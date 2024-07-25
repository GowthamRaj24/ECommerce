const express = require('express');
const routes = express.Router();
const addProductToCart = require('../controllers/products/addProductToCart');
const existingProduct = require('../controllers/products/existingProduct');
const searchProductById = require('../controllers/products/searchProductById');
const searchProductByCategory = require('../controllers/products/searchProductByCategory');
const removeProductFromCart = require('../controllers/products/removeProductFromCart');
const searchProductByPrice = require('../controllers/products/searchProductByPrice');
const sortProductAscending = require('../controllers/products/sortProductAscending');
const  uploadProduct  = require('../controllers/products/UploadProduct');
const sortProductDescending = require('../controllers/products/sortProductDescending');
const addDiscount = require('../controllers/products/addDiscount');
const fetchAllProducts = require('../controllers/products/fetchAllProducts');

routes
    .post('/addProductToCart',addProductToCart.addProductToCart)
    .post('/existingProduct',existingProduct.existingProduct)
    .post('/searchProductById' , searchProductById.searchProductById)
    .post('/searchProductByCategory' , searchProductByCategory.searchProductByCategory)
    .post('/removeProductFromCart', removeProductFromCart.removeProductFromCart)
    .post('/searchProductByPrice', searchProductByPrice.searchProductByPrice)
    .post('/sortProductAscending', sortProductAscending.sortProductAscending)
    .post('/uploadProduct' , uploadProduct.uploadProduct)
    .post('/addDiscount', addDiscount.addDiscount)
    .post('/fetchAllProducts' , fetchAllProducts.fetchAllProducts)
    .post('/sortProductDescending', sortProductDescending.sortProductDescending);


exports.route = routes;