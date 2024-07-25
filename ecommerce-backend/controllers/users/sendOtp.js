const nodemailer = require('nodemailer');
const usersSchema = require('../../models/users/usersSchema');

const sendOtp = async(req , res) => {
    try{
        
        const user = await usersSchema.findOne({email : req.body.email})
        const otp = Math.floor(100000 + Math.random() * 900000);
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mgowthamraj9491@gmail.com',
                pass : "wtcm oqbw emff jsth"
            }
        });
        const mailOptions = {
            from: "mgowthamraj9491@gmail.com",
            to : req.body.email,
            subject : "OTP Verification",
            text : `Your OTP is ${otp}`
        };
        transporter.sendMail(mailOptions , (err , info) => {
            if (err){
                console.log(err);
            }
            else{
                console.log("Email sent" + info.response);
            }
        });
        res.status(200).json({message : "OTP sent to the email" , sentOtp : otp});
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
}

exports.sendOtp = sendOtp;