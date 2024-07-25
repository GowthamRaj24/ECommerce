const usersSchema = require("../../models/users/usersSchema");


const existingUser = async (req, res) => {
    try {
        const user = await usersSchema.findOne({
            email: req.body.email
        });
        if (user) {
            res.status(200).json({
                message: "User exists"
            });
        } else {
            res.status(200).json({
                message: "User does not exists"
            });
        }
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

exports.existingUser = existingUser;