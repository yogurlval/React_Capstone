import React, { createContext, useContext, useReducer } from "react";

// Define initial cart state
const initialState = {
  items: [],
};

// Define cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload),
      };
    case "CLEAR_CART": // Add this case to clear the cart
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};