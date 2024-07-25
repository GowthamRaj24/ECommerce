const usersSchema = require('../../models/users/usersSchema');

const fetchingUser = async (req, res) => {
    try{
        const user = await usersSchema.findOne({userId : req.body.userID});
        console.log(user);
        res.status(200).json({user});
    }
    catch(err){
        res.status(500).json({message : "Error Fetching User"});
    }
}

exports.fetchingUser = fetchingUser;