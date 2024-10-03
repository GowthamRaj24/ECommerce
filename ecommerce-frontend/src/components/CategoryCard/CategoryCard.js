import React from 'react';
import "./CategoryCard.css";
import rightarrow from "../../images/rightarrow.png";

const CategoryCard = ({ category }) => {
    return (
        <div className="outerCategoryCard">
            <div className="innerCategoryCard">
                <div 
                    className="categoryImage" 
                    style={{backgroundImage: `url(${category.categoryImage})`}}
                ></div>
                <div className="categoryContent">
                    <div>
                        <h3 className="categoryCardTitle">
                            {category.categoryName}
                        </h3>
                        <p className="categoryCardDescription">
                            {category.categoryDescription}
                        </p>
                    </div>
                    <button className="shopNowButton">
                        SHOP NOW
                        <img src={rightarrow} alt="Right arrow" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard;
