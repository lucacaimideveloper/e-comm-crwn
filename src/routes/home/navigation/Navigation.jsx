import React from "react";
import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import Crown from "../../../assets/crown.svg";
// import Authentication from "../authentication/Authentication";
import CartIcon from "../../../components/cartIcon/CartIcon";
import CartDropDown from "../../../components/cartDropDown/CartDropDown";
import { CartContext } from "../../../context/CartDropDownContext";
import { UserContext } from "../../../context/UserContext";
import { signOutUser } from "../../../utils/utils";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./NavigationStyle";

//
//
const Navigation = () => {
  //
  //
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  //
  //

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <NavLinks>
            <img src={Crown} alt="img" />
          </NavLinks>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
