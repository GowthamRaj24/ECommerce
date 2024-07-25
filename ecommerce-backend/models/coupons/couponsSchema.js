const mongoose = require('mongoose');

const couponsSchema = mongoose.Schema({
    couponCode: { type: String, required: true },
    couponDiscount: { type: Number, required: true },
    userId : { type: Array, required: false }
});

module.exports = mongoose.model('coupons', couponsSchema);