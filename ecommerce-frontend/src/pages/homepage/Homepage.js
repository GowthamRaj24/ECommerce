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
// import productCard from "../../components/productCard/productCard";
import basilleaf from "../../images/basil-leaf.png";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

const Homepage = () => {

    const [products, setProducts] = useState([]);
    const categoryContent = [{categoryName : "Farm Fresh Fruits" , categoryDescription: "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius." , categoryImage : ""} ,{categoryName : "Fresh Vegetables" , categoryDescription: "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius." , categoryImage : ""} ,{categoryName : "Organic Legume" , categoryDescription: "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius." , categoryImage : ""}];

    useEffect(() => {
        axios.post("http://localhost:4001/products/fetchAllProducts")
        .then((res) => {
            setProducts(res.data);
            console.log("products",res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);


    useEffect(() => {
        console.log(products[0]);
    }, [products]);



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
                        <ProductCard product={products[0]} />
                        <ProductCard product={products[0]} />
                        <ProductCard product={products[0]} />
                    </div>
                </div>
            </section>
            <section className="categories">
                <img src={basilleaf} alt="" className="categoryLeaf"/>
                <div className="categoryContainer">
                    {categoryContent.map((category) => {
                        return <CategoryCard category={category} />
                    })}
                </div>
            </section>
            <HeaderCartBox />
        </>
    )
};

export default Homepage;