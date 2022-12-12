import React from "react";
import { PRODUCTS } from "../../data/product";
import Product from "./Product";
import "./Shop.css";

const shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>我的自訂商城</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default shop;
