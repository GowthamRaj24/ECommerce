const mongoose = require('mongoose');
const uri = "mongodb+srv://mgowthamraj9491:6uyCZZWtkKkwSaY4@ecommerce.rzcckw3.mongodb.net/ECommerce";

const connection = () => {
    mongoose.connect(uri).then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB", err);
    });
}

module.exports = {connection};
