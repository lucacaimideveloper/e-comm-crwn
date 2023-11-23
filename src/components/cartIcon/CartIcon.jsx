import React from "react";
import Shopping from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartDropDownContext";
import { CartIconStyle, ItemCountStyle } from "./cart.styels.jsx";
import "./cart.styels.jsx";
//
//
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCart = () => {
    return setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconStyle onClick={toggleCart}>
      <img src={Shopping} alt="img" />
      {/* <ShoppinIcon className="shopping-icon" /> */}
      <ItemCountStyle as="span">{cartCount}</ItemCountStyle>
    </CartIconStyle>
  );
};

export default CartIcon;
