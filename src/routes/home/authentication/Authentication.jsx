import React from "react";

import SingUp from "../../../components/singUp/SingUp";
import SingIn from "../../../components/singIn/SingIn";
import "./authentication.styles.scss";

const Authentication = () => {
  //
  //
  return (
    <div className="authentication-container">
      <h1>Sing In</h1>

      <SingIn />
      <SingUp />
    </div>
  );
};

export default Authentication;
