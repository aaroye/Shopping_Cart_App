import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { PRODUCTS } from "../../data/product";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();
  return (
    <div className="cart">
      <div>
        <h1>你的購物車</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            const { productName, price, productImage } = product;
            const id: string = product.id.toString();
            const data = { id, productName, price, productImage };
            return (
              <CartItem
                key={id}
                id={id}
                price={price}
                productName={productName}
                productImage={productImage}
              />
            );
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>總金額: ${totalAmount} </p>
          <div className="checkoutButtons">
            <button onClick={() => navigate("/")}> 繼續購物 </button>
            <button
              onClick={() => alert("此 project 為前端練習，沒有串接後端哦！")}
            >
              {" "}
              結帳{" "}
            </button>
          </div>
        </div>
      ) : (
        <h1 style={{ color: "red", fontSize: "1rem" }}>你還沒有挑選商品哦！</h1>
      )}
    </div>
  );
};

export default Cart;
