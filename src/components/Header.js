import React, {useState} from "react";
import ReactDOM from "react-dom";
import { LOGO_URL } from "../utils/constant"

const Header = () => {
    const [btn, setBtn] = useState("Login")

    return (
        <div className="header">
            <div className="logo_container">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav_items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Cart</a></li>
                    <li><button className="login_btn" onClick={() => {btn == "Login" ? setBtn("Logout") : setBtn("Login")}}>{btn}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;