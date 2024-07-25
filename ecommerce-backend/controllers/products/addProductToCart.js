const usersSchema = require("../../models/users/usersSchema");

const addProductToCart = async (req, res) => {
    try {
        const product = {
            productId: req.body.productId,
            quantity: 1
        };

        const user = await usersSchema.findOne({ userId: req.body.userId });
        console.log(user.cartItems);
        const findProductIndex = user.cartItems.findIndex(
            (item) => item.productId === req.body.productId
        );

        if (findProductIndex !== -1) {
            user.cartItems[findProductIndex].quantity += 1;
        } else {
            user.cartItems.push(product);
        }
        console.log(user.cartItems);

        await usersSchema.findOneAndUpdate(
            { userId: req.body.userId },
            { cartItems: user.cartItems }
        );

        res.status(200).json({
            data: user.cartItems,
            message: "Product added successfully"
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    addProductToCart
};
