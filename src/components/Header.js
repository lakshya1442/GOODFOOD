import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between h-5/6 border border-b-black">
      <div className="logo-container">
        <Link to="/"><img className="w-[164] cursor-pointer" src={LOGO_URL} /></Link>
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4 w-full items-center">
          <li className="px-4 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 cursor-pointer">{loggedInUser}</li>
          <li className="px-4">
            <Link to="/cart">
              <i className="fas fa-shopping-cart text-2xl cursor-pointer"></i>
              <span>{cartItems.length}</span>
            </Link>
          </li>
          {/* <li className="px-4">
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;