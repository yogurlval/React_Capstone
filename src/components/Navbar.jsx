import React, {useState} from "react";
import logo from "../assets/phoKing.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    }

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={logo} />
        <div className="hiddenLinks">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart"><ShoppingBasketOutlinedIcon/></Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart"><ShoppingBasketOutlinedIcon/></Link>
        <button onClick={toggleNavbar}>
        <ReorderRoundedIcon/>
        </button>

      </div>
    </div>
  );
};

export default Navbar;
