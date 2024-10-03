import {  useState } from "react";
import "./CartBox.css";
import close from "../../images/close.png";
import axios from "axios";


const HeaderCartBox = (props) => {
    
    const [CartItems,setCartItems] = useState([]);

    const token = localStorage.getItem("token");

    const cartItem = async (req , res) => {
        axios.post(`http://localhost:4001/users/fetchUserByToken?token=${token}`)
        .then((res) => {
            const user = res.data;
            console.log(user);
            setCartItems(user.cartItems);
        })
        .catch((err) => {
            console.log(err);
        }
        )
    }




    const removeFromCart = (item) => {
        const newCart = CartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(newCart);
    }

    return (
        <>
        <div className="dim" style={{display:props.HeaderCart ? "block" :"none"}} onClick={()=> {props.openCart(false)}}></div>
        <div className="cartbox" style={{right:props.HeaderCart ? "0" :"-100vw" }}> 
            <div className="header_cart_box" >
                <div className="shopping_cart">
                    <h4>Shopping Cart</h4>
                    <span className="close_cart" onClick={()=>{props.openCart(false);}}><img src={close} alt="X" height="15px" /></span>
                </div>

                {(CartItems.length === 0) ? (
                    <>
                        <div className="cart_items">
                            <p>No items in your cart</p>
                        </div>
                        <div className="cart_buttons">
                            <button onClick={()=>{props.openCart(false)}}>Continue Shopping</button>
                        </div>
                    </>) : (
                    <>
                        <div className="cart_items">
                            {CartItems.map((item) => (
                                <div key={item.id} className="cart_item">
                                    <img src={item.image} alt={item.name} height="100px" />
                                    <h3>{item.name}</h3>
                                    <p>{item.price}</p>
                                    <button onClick={() => removeFromCart(item)}>Remove</button>
                                </div>
                            ))}
                        </div>
                        <div className="cart_buttons">
                            <button>Checkout</button>
                            <button>View Cart</button>
                        </div>
                    </>
                )
                
                    }
            </div>
        </div>

        </>
    )
}


export default HeaderCartBox;