import React, {useState, useEffect} from "react";
import { data } from "../data/data";
import MenuItem from "../components/MenuItem";
import './Menu.css'
import axios from 'axios'
import { Item } from "../../server/models/menus";


const Menu = () => {
  const [menuItems, setMenuItems] = useState([])

  useEffect(()=>{
    axios.get('/menu')
    .then(response => setMenuItems(response.data))
    .catch(error => console.log(error))
  }, [])

  // const groupedMenuItems = {}

  // menuItems.forEach(item => {
  //   if (!groupedMenuItems[item.category]) {
  //     groupedMenuItems[item.category] = [];
  //   }
  //   groupedMenuItems[item.category].push(item);
  // })

  return (
    <div className="menu">
      <div className="menuTitle">
        <div className="menuList">
          {Item.map((menuItem, key) => {
            return (<MenuItem key={key} image={menuItem.image} name={menuItem.name} description={menuItem.description} price={menuItem.price}/>);
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
