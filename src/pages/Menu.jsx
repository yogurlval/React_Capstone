import React, { useState, useEffect } from "react";
import MenuItem from "../components/MenuItem";
import axios from "axios";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get('/menu')
      .then(response => setMenuItems(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="menu">
      <div className="menuTitle">
        <div className="menuList">
          {menuItems.map((menuItem, key) => (
            <MenuItem
              key={key}
              name={menuItem.item_name} 
              type={menuItem.item_type}
              description={menuItem.description}
              price={menuItem.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
