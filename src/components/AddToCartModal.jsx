import React, { useState } from "react";
import "./AddToCartModal.css";

const AddToCartModal = ({ item, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState("small");
  const [quantity, setQuantity] = useState(1);

  const sizeOptions = {
    Small: "7.96",
    Regular: "8.96",
    King: "10.46",
  };
  const [specialRequests, setSpecialRequests] = useState("");

  const handleAddToCart = () => {
    const modifiedItem = {
      ...item,
      item_id: item.item_id, // Make sure to include the item_id
      size: selectedSize,
      price: sizeOptions[selectedSize],
      specialRequests: specialRequests,
      quantity: quantity,
    };
console.log('addToCartModal item:', modifiedItem)
    onAddToCart(modifiedItem);
    onClose();
  };

  return (
    
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add to Cart: {item.name}</h2>
        <h3>{item.description}</h3>
        <p className="selectASize">Select Size:</p>
        {Object.keys(sizeOptions).map((size) => (
          <label className="modal-radiobtns" key={size}>
            <input 
              type="radio"
              value={size}
              checked={selectedSize === size}
              onChange={() => setSelectedSize(size)}
            />
            {size} - {sizeOptions[size]}
          </label>
        ))}
        <br />
        <br />
        <label>
          Any Special Requests?:
          <br />
          <br />
          <textarea
          className="requestBox"
            placeholder="If you would like extras of an item, please navigate to our 'Extras' tab and select from the items there :)"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
          />
        </label>
        <br />
        <button className="modal-btn" onClick={handleAddToCart}>Add to Cart</button>
        <br />
        <button className="modal-btn" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddToCartModal;