const usersSchema = require('../../models/users/usersSchema');

const addOrder = async (req, res) => {
    try {
        const order = ({
            orderId: req.body.orderId,
            products: req.body.products,
            totalAmount: req.body.totalAmount,
            status: req.body.status,
            time : req.body.time,
            userId: req.body.userId,
            address: req.body.address,
            discount : req.body.discount,
            paymentMethod : req.body.paymentMethod
        });

        const user = await usersSchema.findOne({ userId: req.body.userId });
        user.orders.push(order);

        await usersSchema.findOneAndUpdate({ userId: req.body.userId }, { orders: user.orders });

        res.status(200).json({
            order,
            message: "Order added successfully"
        });
    }
    catch (err) {
        res.status(500).json({
            err,
            message: "Order not added"
        });
    }
}

exports.addOrder = addOrder;