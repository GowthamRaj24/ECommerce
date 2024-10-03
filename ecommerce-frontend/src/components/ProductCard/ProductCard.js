import React, { useEffect, useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onClickProductCard, id }) => {
  const [productDetails, setProductDetails] = useState(null);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [userId , setUserId] = useState(null);

  useEffect(() => {
    if (product) {
      setProductDetails(product);
    }
  }, [product]);

  useEffect(() => {
    if (productDetails && productDetails.productDiscount > 0) {
      setDiscountedPrice(
        productDetails.productPrice -
          (productDetails.productPrice * productDetails.productDiscount) / 100
      );
    }
  }, [productDetails]);

  if (!productDetails) {
    return (
      <div className="product-card skeleton">
        <div className="skeleton-img"></div>
        <div className="skeleton-content">
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={productDetails.productImage}
          alt={productDetails.productName}
        />
        {productDetails.productDiscount > 0 && (
          <span className="discount-badge">
            -{productDetails.productDiscount}%
          </span>
        )}
      </div>
      <div className="product-content">
        <h3 className="product-name">{productDetails.productName}</h3>
        <p className="product-category">{productDetails.productCategory}</p>
        <p className="product-description">{productDetails.productDescription}</p>
        <div className="product-price">
          {productDetails.productDiscount > 0 ? (
            <>
              <span className="original-price">
                ${productDetails.productPrice}
              </span>
              <span className="discounted-price">${discountedPrice}</span>
            </>
          ) : (
            <span className="regular-price">${productDetails.productPrice}</span>
          )}
        </div>
        <button className="add-to-cart" onClick={() => onClickProductCard(id , userId)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
