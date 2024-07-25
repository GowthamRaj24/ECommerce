const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    productImage: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productDescription: { type: String, required: true },
    productCategory: { type: String, required: true },
    uploadedBy: { type: String, required: true },
    productDiscount: { type: Number, required: false ,default : 0 },
    reviews : { type: Array, required: false },
    rating : { type: Number, required: false }
});

module.exports = mongoose.model('products', productsSchema);