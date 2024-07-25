const e = require("express");
const usersSchema = require("../../models/users/usersSchema");

const addAddress = async (req, res) => {
    try {
        const address = {
            addressId: req.body.addressId,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
            userId: req.body.userId
        };
        console.log(address);
        const user = await usersSchema.findOne({ userId: req.body.userId });
        const existingAddress = user.address.find((item) => item.address === req.body.address);
        if (existingAddress) {
            res.status(200).json({
            message: "Address already exists"
            });
            return;
        }
        console.log(user);
        user.address.push(address);
        
        await usersSchema.findOneAndUpdate(
            { userId: req.body.userId },
            { address : user.address }
        );

        res.status(200).json({
            message: "Address added successfully"
        });
    } catch (err) {
        res.status(500).json({
            err,
            message: "Address not added"
        });
    }
}

exports.addAddress = addAddress;