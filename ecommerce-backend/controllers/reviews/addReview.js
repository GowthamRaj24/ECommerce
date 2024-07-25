const productsSchema = require('../../models/products/productsSchema');


const addReview = async (req, res) => {
    try {
        const review = ({
            productId: req.body.productId,
            review: req.body.description,
            rating: req.body.rating,
            userId : req.body.userId
        });

        const product = await productsSchema.findOne({ productId : req.body.productId });
        
        product.reviews.push(review);
        await productsSchema.findOneAndUpdate({ productId: req.body.productId }, { reviews: product.reviews });

        res.status(200).json({
            message: "Review added successfully"
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Review not added"
        });
    }
}

exports.addReview = addReview;