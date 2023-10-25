import React from "react";
// import { ReactComponent as ShoppinIcon } from "../../assets/shopping-bag.svg";
// import { ReactComponent as ShoppinIcon } from "../../assets/shopping-bag.svg";
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
      {/* <p>logo</p> */}
      {/* <ShoppinIcon className="shopping-icon" /> */}
      <ItemCountStyle as="span">{cartCount}</ItemCountStyle>
    </CartIconStyle>
  );
};

export default CartIcon;
