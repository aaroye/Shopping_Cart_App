import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Product = ({
  data,
}: {
  data: {
    id: number;
    productName: string;
    price: number;
    productImage: string;
  };
}) => {
  const { id, productName, price, productImage } = data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b className="productName">{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartButton" onClick={() => addToCart(id)}>
        放入購物車 {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
