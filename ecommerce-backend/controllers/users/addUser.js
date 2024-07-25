const usersSchema = require('../../models/users/usersSchema');


const addUser = async(req , res) => {
    try{
        const user = await usersSchema.create({
            email : req.body.email,
            name : req.body.name,
            password : req.body.password
        })
        console.log(user);
        console.log(req.body);
        user.save();
        res.status(200).json({message : "User added successfully"});
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
}

exports.addUser = addUser;