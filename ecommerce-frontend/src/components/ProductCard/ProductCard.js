import { useEffect, useState } from "react";
import "./ProductCard.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInr, faRupee, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import image from "../../images/product1.jpg";


const ProductCard = ({ product }) => {
    const [ProductDetails, setProductDetails] = useState(undefined);
    const [DiscountedPrice, setDiscountedPrice] = useState(0);
    const [User , setUser] = useState()

    useEffect(() => {
        setProductDetails(product);
    }, [product]);

    useEffect(() => {
        if (ProductDetails) {
            const temp =
                ProductDetails.productPrice -
                (ProductDetails.productPrice * ProductDetails.productDiscount) / 100;
            setDiscountedPrice(temp);
            console.log("temp", temp);
        }
    }, [ProductDetails]);
    useEffect(() => {
        if (ProductDetails) {
            console.log(ProductDetails.uploadedBy);
            axios.post("http://localhost:4001/users/fetchingUser", { userID: ProductDetails.uploadedBy })
                .then((res, req) => {
                    setUser(res.data);
                    console.log("fetched from product",res.data)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [ProductDetails]);

    return (
        <>
            {ProductDetails !== undefined ? (
                <div className="outerProductCard">
                    <div className="productImageContainer">
                        <img src={image} alt="product" />
                        <p className="productCategory">{ProductDetails.productCategory}</p>
                    </div>
                    <div  className="productCardContent">
                        <p className="productCardTitle">{ProductDetails.productName}</p>
                        <div className="productCardPrice">
                            <p className="strike"><s><FontAwesomeIcon icon={faInr} style={{transform:"scale(0.8)" , marginTop:"2px"}}/>{ProductDetails.productPrice}</s></p>
                            <p style={{color:"green" , transform:"scale(1.3)"}}><FontAwesomeIcon icon={faInr} style={{transform:"scale(0.8)" , marginTop:"2px" }}/>{DiscountedPrice}</p>
                            <p className="ProductCardDiscount">-{ProductDetails.productDiscount}%</p>
                        </div>
                    
                    </div>
                </div>
            ) : (
                <>
                    <div className="outerProductCard">
                        <div className="card is-loading">
                            <div className="loading-image"></div>
                            <div className="loading-content">
                                <h2></h2>
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ProductCard;