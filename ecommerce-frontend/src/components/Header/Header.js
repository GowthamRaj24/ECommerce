import "./Header.css";
import logo from "../../images/logo.png";
import user from "../../images/user.png";   
import { useEffect, useState  } from "react";
import axios from "axios";

const Header = (props) => {

    const [CartItems , setCartItems] = useState([]);

    const token = localStorage.getItem("token");

    const cartItem = async (req , res) => {
        axios.post(`http://localhost:4001/users/fetchUserByToken?token=${token}`)
        .then((res) => {
            const user = res;
            console.log("user Data Header",user);
            setCartItems(user.cartItems);
        })
        .catch((err) => {
            console.log(err);
        }
        )
    }

    useEffect(() => {
        cartItem();
    },[]);

    return(
        <>
            <header className="outer_header">
                <div className="inner_header">
                    <div className="div1_header">
                        <div className="logo_content_header">
                            <img className="logo" src={logo} alt="logo" height="70px" />
                            <a href="/everything"><p>Everything</p></a>
                            <a href="/groceries"><p>Groceries</p></a>
                            <a href="/Juices"><p>Juice</p></a>
                        </div>
                    </div>
                    <div className="div1_header">
                        <div className="profile_content_header">
                            <a href="/about"><p>About</p></a>
                            <a href="/contact"><p>Contact</p></a>
                            <a onClick={()=>{props.openCart(true)}}>
                                <button>Cart</button>
                            </a>
                            <span  className="header_profile"><img src={user} height="30px"/></span>        
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};

export default Header;