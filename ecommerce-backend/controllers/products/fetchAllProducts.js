const productsSchema = require('../../models/products/productsSchema');

const fetchAllProducts = async (req, res) => {
    try {
        const products = await productsSchema.find();
        res.status(200).json(products);
        console.log("Products Fetched Successfully", products);
    }
    catch (error) {
        res.status(200).json("Products Not found.");
    }
}

exports.fetchAllProducts = fetchAllProducts;