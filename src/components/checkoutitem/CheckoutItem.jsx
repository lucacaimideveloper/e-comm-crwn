import React from "react";
import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartDropDownContext";
//
//
const CheckoutItem = ({ item }) => {
  //
  //
  const { name, imageUrl, price, quantity } = item;
  const { deleteItem, addItemToCart, removeItem } = useContext(CartContext);
  //
  //
  const deleteHandler = () => deleteItem(item);
  //
  //
  const increase = () => addItemToCart(item);
  //
  //
  const decrease = () => removeItem(item);
  //
  //
  return (
    <>
      <div className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={`${name}`} />
        </div>

        <span className="name">{name}</span>
        <span className="quantity">
          <div className="arrow" onClick={decrease}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={increase}>
            &#10095;
          </div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={deleteHandler}>
          &#10005;
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;
