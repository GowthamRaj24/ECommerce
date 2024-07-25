const productsSchema = require('../../models/products/productsSchema');

const searchProductByCategory = async (req, res) => {
    try {
        const product = await productsSchema.find({
            productCategory: req.body.productCategory
        });
        if (product) {
            res.status(200).json({
                data: product,
                message: "Product found"
            });
        } else {
            res.status(200).json({
                message: "Product not found"
            });
        }
    }
    catch (err) {
        res.status(500).json({
            message: "Product not found"
        });
    }
}

exports.searchProductByCategory = searchProductByCategory;