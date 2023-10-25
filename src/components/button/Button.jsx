import React from "react";
import "./button.styles.jsx";
import { BaseButton, GoogleSingInButton, Inverted } from "./button.styles.jsx";
//
//set diff class name as obj
export const BUTTON_TYPES_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};
//
//param is setting defualt button to base
const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) => {
  return {
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSingInButton,
    [BUTTON_TYPES_CLASSES.inverted]: Inverted,
  }[buttonType];
};

//
//other props allowd us to pass all the value that form the button (type, placeholder, ecc...)

const Button = ({ buttonType, children, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (
    <div>
      <CustomButton {...otherProps}>{children}</CustomButton>
    </div>
  );
};

export default Button;
