import React, { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../data/product";

type cartItems = {
  [index: number]: number;
};
type contentType = {
  cartItems: cartItems;
  addToCart: Function;
  removeFromCart: Function;
  getTotalCartAmount: Function;
};
export const ShopContext = createContext<contentType>({
  cartItems: {},
  addToCart: () => undefined,
  removeFromCart: () => undefined,
  getTotalCartAmount: () => undefined,
});

const getDefaultCart = () => {
  let cart: cartItems = {};
  for (let i = 0; i < PRODUCTS.length; i++) {
    cart[i + 1] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props: { children: any }) => {
  const [cartItems, setCartItems] = useState<cartItems>({});
  if (Object.keys(cartItems).length === 0) setCartItems(getDefaultCart);
  const addToCart = (itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((p) => p.id === Number(item));
        total += cartItems[item] * itemInfo?.price!;
      }
    }
    return total;
  };
  const contextValue: contentType = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
