const usersSchema = require("../../models/users/usersSchema");

const addProductToCart = async (req, res) => {
    try {
        const { productId, userId } = req.body;

        const product = {
            productId,
            quantity: 1
        };

        const user = await usersSchema.findOne({ userId });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const findProductIndex = user.cartItems.findIndex(
            (item) => item.productId === productId
        );

        if (findProductIndex !== -1) {
            user.cartItems[findProductIndex].quantity += 1;
        } else {
            user.cartItems.push(product);
        }

        await user.save(); // Save the user instead of using `findOneAndUpdate`

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
