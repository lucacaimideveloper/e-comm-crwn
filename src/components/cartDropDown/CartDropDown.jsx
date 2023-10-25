import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import "./cartDropDown.styles.jsx";
import {
  CartDropDownStyle,
  CartItemStyle,
  EmptyMessageStyle,
} from "./cartDropDown.styles.jsx";
import Button from "../button/Button";
import CartItem from "../cartItem/CartItem";
import { CartContext } from "../../context/CartDropDownContext";
//
//
const CartDropDown = () => {
  //
  //
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  //
  //
  const onToggle = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownStyle>
      <CartItemStyle>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessageStyle as="span">Your Cart Is Empty</EmptyMessageStyle>
        )}
      </CartItemStyle>
      <Button onClick={onToggle}>Go to Checkout</Button>
    </CartDropDownStyle>
  );
};

export default CartDropDown;
