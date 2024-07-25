const couponsSchema = require('../../models/coupons/couponsSchema');
const usersSchema = require('../../models/users/usersSchema');

const validateCoupon = async (req, res) => {
    try {
        const coupon = await couponsSchema.findOne({ couponCode: req.body.couponCode });
        if (!coupon) {
            return res.status(400).json({
                message: "Invalid Coupon"
            });
        }
        console.log(coupon);
        const user = coupon.userId.find(user => user.userId === req.body.userId);
        if (user) {
            return res.status(400).json({
                message: "Coupon already used by user"
            });
        }
        else{
            coupon.userId.push({userId: req.body.userId});
            await couponsSchema.findOneAndUpdate(
                { couponCode: req.body.couponCode },
                { userId: coupon.userId }
            );
        }


        res.status(200).json({
            message: "Coupon validated successfully"
        });
    }

    catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

exports.validateCoupon = validateCoupon;