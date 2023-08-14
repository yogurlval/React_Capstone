import React from "react";
import { data } from "../data/data";
import MenuItem from "../components/MenuItem";
import './Menu.css'

const Menu = () => {
  return (
    <div className="menu">
      <div className="menuTitle">
        <div className="menuList">
          {data.map((menuItem, key) => {
            return (<MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price}/>);
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
