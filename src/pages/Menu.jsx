import React, { useState, useEffect } from "react";
import MenuItem from "../components/MenuItem";
import axios from 'axios';
import './Menu.css'

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all")

  useEffect(() => {
    axios.get('https://pho-king.onrender.com/menu')
    .then(response => {
      console.log(response.data); // Check the fetched data
      const menuItemsWithId = response.data.map(item => ({
        ...item,
        item_id: item.item_id // Include the item_id property
      }));
      setMenuItems(menuItemsWithId);
      // console.log('menuItemswithId:', menuItemsWithId)
    })
    .catch(error => console.log(error));
  }, []);

  const filteredMenuItems = selectedTab === "all" ? menuItems : menuItems.filter(item => item.item_type === selectedTab)


  return (
    <div className="menu">
      <div className="menuTitle">
      <div className="tabContainer">
          <button className="menuTabs" onClick={() => setSelectedTab("all")}>All</button>
          <button className="menuTabs" onClick={() => setSelectedTab("Appetizers")}>Appetizers</button>
          <button className="menuTabs" onClick={() => setSelectedTab("Pho: Rice Noodle with Beef Broth")}>Pho: Rice Noodle with Beef Broth</button>
          <button className="menuTabs" onClick={() => setSelectedTab("Hu Tieu: Rice Noodle with Chicken Broth")}>Hu Tieu: Rice Noodle with Chicken Broth</button>
          <button className="menuTabs" onClick={() => setSelectedTab("Mi: Egg Noodle with Chicken Broth")}>Mi: Egg Noodle with Chicken Broth</button>
          <button className="menuTabs" onClick={() => setSelectedTab("Com Chien: Fried Rice")}>Com Chien: Fried Rice</button>
          <button className="menuTabs" onClick={() => setSelectedTab("Bun: Vermicelli Noodle Bowls")}>Bun: Vermicelli Noodle Bowls</button>
          <button className="menuTabs" onClick={() => setSelectedTab("Lo Mein")}>Lo Mein</button>
          <button className="menuTabs" onClick={() => setSelectedTab("Extras")}>Extras</button>
          <button className="menuTabs" onClick={() => setSelectedTab("Drinks")}>Drinks</button>
        </div>
        <div className="tabTitles">
        {selectedTab === "all" && <h1>All Items</h1>}
        {selectedTab === "Appetizers" && <h1>Appetizers</h1>}
        {selectedTab === "Pho: Rice Noodle with Beef Broth" && <h1>Pho: Rice Noodle with Beef Broth</h1>}
        {selectedTab === "Hu Tieu: Rice Noodle with Chicken Broth" && <h1>Hu Tieu: Rice Noodle with Chicken Broth</h1>}
        {selectedTab === "Mi: Egg Noodle with Chicken Broth" && <h1>Mi: Egg Noodle with Chicken Broth</h1>}
        {selectedTab === "Com Chien: Fried Rice" && <h1>Com Chien: Fried Rice</h1>}
        {selectedTab === "Bun: Vermicelli Noodle Bowls" && <h1>Bun: Vermicelli Noodle Bowls</h1>}
        {selectedTab === "Lo Mein" && <h1>Lo Mein</h1>}
        {selectedTab === "Extras" && <h1>Extras</h1>}
        {selectedTab === "Drinks" && <h1>Drinks</h1>}
        {selectedTab === "Bun: Vermicelli Noodle Bowls" && <p className="Bun-Description">All Vermicellis bowls include Vermicelli Rice Noodles, Lettuce, Bean Sprouts, Cucumber, and Peanuts!</p>}
        </div>
        <div className="menuList">
          {filteredMenuItems.map((menuItem, key) => (
            <MenuItem
              key={menuItem.item_id}
              item_id={menuItem.item_id}
              name={menuItem.item_name} 
              size={menuItem.size}
              type={menuItem.item_type}
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
