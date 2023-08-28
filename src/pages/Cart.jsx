import React from "react";
import { useCart } from "../components/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartState, dispatch } = useCart();
  let { items } = cartState;

  // Consolidate items with the same name and price into one entry
  const consolidatedItems = [];
  items.forEach((item) => {
    const existingItem = consolidatedItems.find(
      (consolidatedItem) =>
        consolidatedItem.name === item.name &&
        consolidatedItem.price === item.price
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      consolidatedItems.push({ ...item, quantity: 1 });
    }
  });

  const calculateTotalPrice = (items) => {
    return items.reduce(
      (total, item) =>
        total + parseFloat(item.price.replace("$", "")) * item.quantity,
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
            {consolidatedItems.map((item) => (
              <div className="cartListItems">
                <li key={`${item.name}-${item.price}`}>
                  <div>
                  <h4>{item.name}</h4>
                  {item.specialRequests && (
                    <p>Special Requests: {item.specialRequests}</p>
                  )}
                  </div>
                  <p className="price">{item.price}</p>
                  {item.quantity > 1 ? <p>{item.quantity}</p> : <p>1</p>}
                  <button className="removeBtn" onClick={() => removeFromCart(item.name, item.price)}>Remove</button>
                </li>
              </div>
            ))}
          </ul>
          <p className="cartTotal">Total: ${total.toFixed(2)}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default Cart;

