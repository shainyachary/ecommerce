import { createContext, useState, useEffect } from "react";
// import { data } from "../utils";

export const ProductContext = createContext(null);

const getCartDetails = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ProductContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState(getCartDetails());

  const getData = () => {
    fetch("http://localhost:9998/allproducts")
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    getData();
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:9998/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ItemId: itemId }),
      })
        .then((res) => res.json())
        .then((d) => console.log(d));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:9998/removeproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ItemId: itemId }),
      })
        .then((res) => res.json())
        .then((d) => console.log(d));
    }
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = data?.data?.find((p) => p.id === Number(item));
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
  console.log("p", products);
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
