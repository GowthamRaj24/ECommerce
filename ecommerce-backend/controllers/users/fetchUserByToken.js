const usersSchema = require('../../models/users/usersSchema');
const jwt = require('jsonwebtoken');

const fetchUserByToken = async (req, res) => {
    try {
        const token = req.query.token;
        const decoded = jwt.verify(token, "secretkey");
        const user = await usersSchema.findById(decoded.id);
        res.status(200).json(user);
        console.log("User Fetched Successfully", user);
    }
    catch (error) {
        res.status(200).json("User Not found.");
    }
}

exports.fetchUserByToken = fetchUserByToken;
