const usersSchema = require('../../models/users/usersSchema');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        console.log(req.body);
        const invalid = await usersSchema.findOne({ email: email });
        const user = await usersSchema.findOne({ email: email , password: password });

        if (!invalid) {
            res.status(404).json({error:"User not found"});
            return;
        }
        if (invalid && !user) {
            res.status(404).json({error:"Invalid Credentials"});
            return;
        }

        const token = jwt.sign({ id: user._id }, "secretkey");
        res.status(200).json({ user, token });
        res.end();
    }
    catch (error) {
        res.status(404).json({"error in logging in": error?.message});

    }
};

exports.loginUser = loginUser;