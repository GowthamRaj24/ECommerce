const productsSchema = require('../../models/products/productsSchema');

const addDiscount = async (req, res) => {
    try {
        const product = await productsSchema.findOne({ productId: req.body.productId });
        product.productDiscount = req.body.discount;
        await productsSchema.findOneAndUpdate({ productId: req.body.productId }, { productDiscount: product.productDiscount });
        res.status(200).json({
            message: "Discount added successfully"
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Error adding discount: " + err.message
        });
    }
}

exports.addDiscount = addDiscount;