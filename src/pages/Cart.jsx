import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import "./Cart.css";
import axios from "axios";

const Cart = () => {
  const { cartState, dispatch } = useCart();
  let { items } = cartState;

  
  // Consolidate items with the same name and price into one entry
  const consolidatedItems = [];
items.forEach((item) => {
  // console.log('Item:', item)
  const existingItem = consolidatedItems.find(
    (consolidatedItem) =>
      consolidatedItem.name === item.name &&
      consolidatedItem.price === item.price &&
      consolidatedItem.id === item.id &&
      consolidatedItem.size === item.size
  );
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    consolidatedItems.push({ ...item, item_id: item.item_id, size: item.size, quantity: 1 }); // Include item_id here
  }
});
  // console.log('consolidatedItems:',consolidatedItems)

  const calculateTotalPrice = (items) => {
    return items.reduce(
      (total, item) =>
        total + parseFloat(item.price.replace("$", " ")) * item.quantity,
      0
    );
  };

  const removeFromCart = (name, price) => {
    const itemIndex = items.findIndex(
      (item) => item.name === name && item.price === price
    );

    if (itemIndex !== -1) {
      dispatch({ type: "REMOVE_FROM_CART", payload: itemIndex });
    }
  };

  const total = calculateTotalPrice(consolidatedItems);

  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const submitOrder = async () => {
    const order = {
      customerName,
      phoneNumber,
      consolidatedItems,
      total,
    };
    
    try {
      const response = await axios.post("https://pho-king.onrender.com/cart", order, consolidatedItems); // Send POST request to backend
      console.log('Sending to Backend:', response);

      dispatch({ type: "CLEAR_CART" });
      dispatch({ type: "ORDER_SUBMITTED" });
      // console.log('cart.jsx line 62 post request:',response.data)
    } catch (error) {
      console.log("Error submitting order:", error);
    }
  };

  return (
    <div className="cartBody">
      <div className="Cart-Container">
        <h2 className="cartHeader">Your Cart</h2>
        {consolidatedItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cartList">
            <ul>
              <li className="cartCategories">
                <h3>Name</h3>
                <h3>Price</h3>
                <h3>Quantity</h3>
                <br />
              </li>
              {consolidatedItems.map((item, index) => (
                <div className="cartListItems" key={index}>
                  <li className="cartListItems" key={`${item.name}-${item.price}`}>
                    <div>
                      <h4>{item.name}</h4>
                      {item.size && <p>Size: {item.size}</p>}
                      {item.specialRequests && (
                        <p>Special Requests: {item.specialRequests}</p>
                      )}
                    </div>
                    <p className="price">${item.price}</p>
                    {item.quantity > 1 ? <p>{item.quantity}</p> : <p>1</p>}
                    <button
                      className="removeBtn"
                      onClick={() => removeFromCart(item.name, item.price)}
                    >
                      Remove
                    </button>
                  </li>
                </div>
              ))}
            </ul>
            <p className="cartTotal">Total: ${total.toFixed(2)} + tax</p>
          </div>
        )}
        <div className="orderDetailsBox">
        <h3>Customer Details</h3>
        <div>
          <label htmlFor="customerName">Name:</label>
          <input
          className="cart-input"
          type="text"
          required
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
          className="cart-input"
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button className="submitBtn" onClick={submitOrder}>
          SUBMIT ORDER
        </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
