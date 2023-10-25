import React from "react";
import { ItemDetails, ItemStyle } from "./cart-item.styles";
import "./cartItem.styels.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <ItemStyle>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </ItemStyle>
  );
};

export default CartItem;
