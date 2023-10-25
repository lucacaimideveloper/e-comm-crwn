import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartDropDownContext";
import CheckoutItem from "../../../components/checkoutitem/CheckoutItem";
import "./checkout.styles.scss";
//
//
const Checkout = () => {
  //
  //
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}
      <span className="total">Total: £{cartTotal}</span>
    </div>
  );
};

export default Checkout;
