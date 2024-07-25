const productsSchema = require('../../models/products/productsSchema');

const uploadProduct = async (req, res) => {
    try {
        console.log(req.body);
        
        const product = await productsSchema.create({
            productId: req.body.productId,
            productName: req.body.productName,
            productCategory: req.body.productCategory,
            productPrice: req.body.productPrice,
            productDescription: req.body.productDescription,
            productImage: req.body.productImage,
            uploadedBy : req.body.uploadedBy
        });
        console.log(product);
        await product.save();
        res.status(200).json({
            message: "Product uploaded successfully"
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Error uploading product: " + err.message
        });
    }
}

exports.uploadProduct = uploadProduct;
