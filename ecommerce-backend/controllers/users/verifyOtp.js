const verifyOtp = async (req, res) => {
    try{
        if(req.body.sentOtp == req.body.otp){
            res.status(200).json({message : "OTP verified successfully"});
        }
        else{
            res.status(200).json({message : "Enter Correct OTP"});
        }
    }
    catch{
        res.status(500).json({message : err.message});
    }
}

exports.verifyOtp = verifyOtp;