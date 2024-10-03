import "./Homepage.css";
import heroImage from "../../images/heroimage.png";
import HeaderCartBox from "../../components/CartHandle/CartBox";
import leaf from "../../images/logo-leaf-new.png";
import Button from "../../components/Button/Button";
import cart from "../../images/online-shopping.png";
import axios from "axios";
import { useEffect, useState } from "react";
import FeatureBox from "../../components/FeatureBox/FeatureBox";
import { faTruckFast , faCertificate , faMoneyBill , faArrowRightArrowLeft} from '@fortawesome/free-solid-svg-icons';
import basilleaf from "../../images/basil-leaf.png";
// @ts-ignore
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import vegCategory from "../../images/vegCategory.jpeg";
import fruitCategory from "../../images/fruitCategory.jpeg";
import legumeCategory from "../../images/beancategory.jpeg";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
    const [products, setProducts] = useState(null);
    const [userId , setUserId] = useState();
    const categoryContent = [{categoryName : "Farm Fresh Fruits" , categoryDescription: "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius." , categoryImage : vegCategory} ,{categoryName : "Fresh Vegetables" , categoryDescription: "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius." , categoryImage : fruitCategory} ,{categoryName : "Organic Legume" , categoryDescription: "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius." , categoryImage : legumeCategory}];

    useEffect(() => {
        axios.post("http://localhost:4001/products/fetchAllProducts")
        .then((res) => {
            setProducts(res.data);
            console.log("Products sent Successfully ", res.data);
        })
    } , []);

    const handleAddToCart = async (id) => {
        try {
            const res = await axios.post("http://localhost:4001/products/addProductToCart", { productId: id, userId });
            console.log("Product Added Successfully ", res.data);
        } catch (err) {
            console.error("Error Occurred While Adding Product To Cart", err);
        }
    };

    return(
        <>
            <section className="hero">
                <div className="inner_hero">
                    <div className="hero_image">
                        <img className="hero_image_img" src={heroImage} alt="hero" />
                    </div>
                    <div className="hero_content">
                        <div className="hero_content_image">
                            <img src={leaf} alt="" />
                            <div className="hero_content_subheading">Best Quality Products</div>
                            <div className="hero_content_heading">Join The Organic Movement!</div>
                            <div className="hero_content_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                        </div>
                        <Button icon={cart}>SHOP NOW</Button>
                    </div>
                </div>
            </section>


            <section className="features">
                <div className="inner_features">
                    <FeatureBox icon={faTruckFast} heading="Free Shipping" text="Above $5 Only" />
                    <FeatureBox icon={faCertificate} heading="Certified Organic" text="100% Gaurenteed" />
                    <FeatureBox icon={faMoneyBill} heading="Huge Savings" text="At Lowest Price" />
                    <FeatureBox icon={faArrowRightArrowLeft} heading="24/7 Support" text="No Questions Asked" />
                </div>
            </section>
            <section className="products">
                <div className="bestSellingProducts">
                    <div className="bestSellingProductsHead">
                        <h1 className="bestProductsTitle">Best Selling Products</h1>
                        <img src={leaf} alt="" />
                    </div>
                    <div className="bestSellingProductsContainer">
                        {products ? products.slice(0,3).map((item , index)=>{
                            return                                    
                            <ProductCard
                            product={item}
                            key={item._id}
                            onClickProductCard={handleAddToCart}
                            id={item._id}
                        />
                        }) : <h1>Product Card</h1>}
                    </div>
                </div>
            </section>
            <section className="categories">
                <img src={basilleaf} alt="" className="categoryLeaf"/>
                <div className="categoryContainer">
                    {categoryContent.map((category) => {
                        return <CategoryCard category={category} onClick={() => {
                            handleAddToCart(category._id);
                        }} />
                    })}
                </div>
            </section>

            <section className="discount">
                <h3>Get 25% Off On Your First Purchase!</h3>
                <Button icon={cart}>SHOP NOW</Button>
            </section>
            <section className="tryfree">
                <h3>Try Our Products For Free!</h3>
            </section>

            <section className="products">
                <div className="bestSellingProducts">
                    <div className="bestSellingProductsHead">
                        <h1 className="bestProductsTitle">Trending Products</h1>
                        <img src={leaf} alt="" />
                    </div>
                    <div className="bestSellingProductsContainer">
                    {products ? products.slice(0,3).map((item , index)=>{
                            return  <ProductCard
                            product={item}
                            key={item._id}
                            onClickProductCard={handleAddToCart} // Pass function here
                            id={item._id}
                          />
                        }) : <h1>Product Card</h1>}
                    </div>
                </div>
            </section>

            <section className="reviewproducts">
                <div className="bestSellingProducts">
                    <div className="bestSellingProductsHead">
                        <h1 className="bestProductsTitle">Customer Reviews</h1>
                        <img src={leaf} alt="" />
                    </div>
                    <div className="">
                        <ReviewCard />
                    </div>
                </div>
            </section>

            <Footer />
            <HeaderCartBox />
        </>
    )
};

export default Homepage;