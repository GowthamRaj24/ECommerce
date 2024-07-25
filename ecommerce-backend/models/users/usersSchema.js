const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: { type: String, required: true },
    displayName: { type: String , required: true},
    email: { type: String , required: true},
    password: { type: String, required: true },
    image: { type: String , required: false},
    address: { type: Array, required: false },
    phoneNumber: { type: String, required: false },
    cartItems: { type: Array, required: false },
    reviews: { type: Array, required: false },
    orders: { type: Array, required: false },
    token : {type : String , required : false}
});

module.exports = mongoose.model('users', userSchema);
