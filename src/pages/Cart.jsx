import React from 'react';
import { useCart } from '../components/CartContext';

const Cart = () => {
  const { cartState, dispatch } = useCart(); // Get dispatch function from useCart
  const { items } = cartState;

  const removeFromCart = (index) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: index });
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <h4>{item.name}</h4>
              {item.specialRequests && <p>Special Requests: {item.specialRequests}</p>}
              {item.price}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;


