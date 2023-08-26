import React, { useState, useEffect } from "react";
import MenuItem from "../components/MenuItem";
import axios from 'axios';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all")

  useEffect(() => {
    axios.get('http://localhost:4004/menu')
      .then(response => {
        console.log(response.data); // Check the fetched data
        setMenuItems(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const filteredMenuItems = selectedTab === "all" ? menuItems : menuItems.filter(item => item.item_type === selectedTab)


  return (
    <div className="menu">
      <div className="menuTitle">
      <div className="tabContainer">
          <button onClick={() => setSelectedTab("all")}>All</button>
          <button onClick={() => setSelectedTab("Appetizers")}>Appetizers</button>
          <button onClick={() => setSelectedTab("Pho: Rice Noodle with Beef Broth")}>Pho: Rice Noodle with Beef Broth</button>
          <button onClick={() => setSelectedTab("Hu Tieu: Rice Noodle with Chicken Broth")}>Hu Tieu: Rice Noodle with Chicken Broth</button>
          <button onClick={() => setSelectedTab("Mi: Egg Noodle with Chicken Broth")}>Mi: Egg Noodle with Chicken Broth</button>
          <button onClick={() => setSelectedTab("Com Chien: Fried Rice")}>Com Chien: Fried Rice</button>
          <button onClick={() => setSelectedTab("Bun: Vermicelli Noodle Bowls")}>Bun: Vermicelli Noodle Bowls</button>
          <button onClick={() => setSelectedTab("Lo Mein")}>Lo Mein</button>
          <button onClick={() => setSelectedTab("Extras")}>Extras</button>
          <button onClick={() => setSelectedTab("Drinks")}>Drinks</button>
        </div>
        {selectedTab === "Bun: Vermicelli Noodle Bowls" && <p>All Vermicellis bowls include Vermicelli Rice Noodles, Lettuce, Bean Sprouts, Cucumber, and Peanuts!</p>}
        <div className="menuList">
          {filteredMenuItems.map((menuItem, key) => (
            <MenuItem
              key={key}
              name={menuItem.item_name} 
              // type={menuItem.item_type}
              description={menuItem.description}
              price={menuItem.price}
              requiresSize={
                selectedTab === "Pho: Rice Noodle with Beef Broth" ||
                selectedTab === "Hu Tieu: Rice Noodle with Chicken Broth" ||
                selectedTab === "Mi: Egg Noodle with Chicken Broth"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
