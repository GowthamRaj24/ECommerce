import Button from "../Button/Button";
import "./CategoryCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const CategoryCard = ({ category }) => {
    return (
        <>
        <div className="outerCategoryCard">
            <div className="innerCategoryCard">
                <div className="categoryCardTitle">
                    {category.categoryName}
                </div>
                <div className="categoryCardDescription">
                    {category.categoryDescription}
                </div>
                <Button icon={faArrowRight}>Shop Now</Button>
                
            </div>
        </div>
        </>
    )
}

export default CategoryCard;