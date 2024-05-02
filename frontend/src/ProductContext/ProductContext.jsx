import { createContext, useState } from "react";
import { data } from "../utils";

export const ProductContext = createContext(null);

const getCartDetails = () => {
  let cart = {};
  for (let index = 0; index < data.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ProductContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getCartDetails());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = data.find((p) => p.id === Number(item));
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const products = { data };

  return (
    <ProductContext.Provider
      value={{
        products,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalAmount,
        getCartItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
