import React from "react";
import { useState } from "react";
import {
  createAuthenticationuserEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/utils";
import FormInput from "../formInput/FormInput";
import Button from "../button/Button";
import "./singUp.styles.scss";
//
//
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
// console.log(defaultFormFields, " def");
//
//
const SingUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createAuthenticationuserEmailAndPassword(
        email,
        password
      );

      await createUserDocFromAuth(user, { displayName });

      resetForm();
      //
      //
    } catch (err) {
      //
      //leverage error
      if (err.code == "auth/email-already-in-use") {
        alert("Cannot create user, email alredy in use");
      } else {
        console.log("error creating creatimg account", err);
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };
  //
  //
  return (
    <>
      <div className="sing-up-container">
        <h2>Don't have an account?</h2>
        <span>Sing up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Display Name"
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            required
          />
          <FormInput
            label="email"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <FormInput
            label="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />

          <Button type="submit">Sign up!</Button>
        </form>
      </div>
    </>
  );
};

export default SingUp;
