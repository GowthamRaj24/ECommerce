const usersSchema = require('../../models/users/usersSchema');

const existingProduct = async (req, res) => {
    try {
        console.log(req.body);
        const user = await usersSchema.findById(req.body.userId);
        console.log(user);
        if(user.cartItems.length>0){
            const productDetails = user.cartItems.filter((product) => product.productId === req.body.productId);
            res.status(200).json({
                data: productDetails,
                message: "Product found"
            });
        }
        else{
            res.status(200).json({
                message: "Product not found"
            });
        }
    }
    catch (err) {
        res.status(500).json({
            message: "invalid product Id"
        });
    }
}

exports.existingProduct = existingProduct;