const couponsSchema = require('../../models/coupons/couponsSchema');

const addCoupon = async (req, res) => {
    try {

        const couponExists = await couponsSchema.findOne({ couponCode: req.body.couponCode });
        if (couponExists) {
            return res.status(400).json({
                message: "Coupon already exists"
            });
            return;
        }
        const coupon = await couponsSchema.create({
            couponCode: req.body.couponCode,
            couponDiscount: req.body.couponDiscount
        });

        await coupon.save();
        res.status(200).json({
            message: "Coupon added successfully"
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

exports.addCoupon = addCoupon;