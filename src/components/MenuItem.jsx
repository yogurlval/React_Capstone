import React, {useState} from "react";
import { useCart } from "../components/CartContext";
import AddToCartModal from "./AddToCartModal";

const MenuItem = ({ name, type, description, price, requiresSize }) => {
  const { dispatch } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = () => {
    if (requiresSize) {
      setIsModalOpen(true); // Show size modal for items that require size
    } else {
      // Add items that don't require size directly to the cart
      handleAddToCart({ name, description, price, quantity: 1 });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (modifiedItem) => {
    dispatch({ type: "ADD_TO_CART", payload: modifiedItem });
  };

  return (
    <div className="menuItem">
      <h1>{name}</h1>
      {/* <p>{type}</p> */}
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={addToCart}>Add To Cart</button>

      {requiresSize && isModalOpen && (
        <AddToCartModal
          item={{ name, type, description, price }}
          onClose={closeModal}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default MenuItem;