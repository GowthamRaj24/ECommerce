const productsSchema = require('../../models/products/productsSchema');

sortProductAscending = async (req, res) => {
    try {
        const products = await productsSchema.find().sort({ productPrice: 1 });
        res.status(200).json(products);
    } 
    catch (err) {
        res.status(500).json({
            message: "Product not found"
        });
    }
}

exports.sortProductAscending = sortProductAscending;