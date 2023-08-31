import React, { useState } from "react";
import logo from "../assets/phoKing.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { useCart } from "./CartContext";

const Navbar = () => {
  const { cartState } = useCart();
  const { items } = cartState;

  const totalItemsInCart = items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  console.log(totalItemsInCart, items)

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={logo} />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/contact">Contact</Link>
          <div className="cartIcon">
          <Link to="/cart">
          <ShoppingBasketOutlinedIcon />
          {totalItemsInCart > 0 && (
            <span className="cartCount">{totalItemsInCart}</span>
          )}
        </Link>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          <ShoppingBasketOutlinedIcon />
          {totalItemsInCart > 0 && (
            <span className="cartCount">{totalItemsInCart}</span>
          )}
        </Link>
        <button onClick={toggleNavbar}>
          <ReorderRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
