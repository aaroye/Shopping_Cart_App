import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItem = (props: {
  id: string;
  productName: string;
  price: number;
  productImage: string;
}) => {
  const { id, productName, price, productImage } = props;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const [countText, setCountText] = useState(
    cartItems[parseInt(id)].toString()
  );
  useEffect(() => {
    setCountText(cartItems[parseInt(id)].toString());
  }, [cartItems]);

  return (
    <div className="cartItem">
      {" "}
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(parseInt(id))}> - </button>
          <input
            type="text"
            value={countText}
            onChange={(e) => setCountText(e.target.value)}
          />
          <button onClick={() => addToCart(parseInt(id))}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
