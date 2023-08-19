import React from "react";

const MenuItem = ({ name, type, description, price }) => {
  return (
    <div className="menuItem">
      <h1>{name}</h1>
      <p>{type}</p>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
};

export default MenuItem;
