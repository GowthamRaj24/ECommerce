const productsSchema = require('../../models/products/productsSchema');

const searchProductByPrice = async (req, res) => {
    try {
        const  lowPrice = req.body.lowPrice;
        const highPrice = req.body.highPrice;
        console.log(lowPrice, highPrice);
        const products = await productsSchema.find({
            productPrice: { $gte: lowPrice, $lte: highPrice }
        });
        console.log(products);
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({
            message: "Product not found"
        });
    }
}

exports.searchProductByPrice = searchProductByPrice;