import React from "react";

const MenuItem = ({ image, name, description, price }) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
};

export default MenuItem;
