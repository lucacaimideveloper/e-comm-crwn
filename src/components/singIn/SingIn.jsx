import React from "react";
import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInAuthWithEmailAndPassword,
} from "../../utils/utils";
import FormInput from "../formInput/FormInput";
import Button, { BUTTON_TYPES_CLASSES } from "../button/Button";
// import { UserContext } from "../../context/UserContext";
import "./singIn.styles.scss";
//
//
const defaultFormFields = {
  email: "",
  password: "",
};
//
//
const SingIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const singInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      //set Current user run when the user is set
      // setCurrentUser(user);
      resetForm();
    } catch (err) {
      //
      //leverage error
      switch (err.code) {
        case " auth/wrong-password":
          alert("incorrect password pr email");
          break;
        case "auth/user-not-found":
          alert * "no user associated with this email";
          break;
        default:
          console.log(err);
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
        <h2>Already have an account?</h2>
        <span>Sing In with your email and password</span>
        <form onSubmit={handleSubmit}>
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
          <div className="buttons-container">
            <Button type="submit">Sing In!</Button>
            <Button
              buttonType={BUTTON_TYPES_CLASSES.google}
              type="button"
              onClick={singInWithGoogle}>
              Google sing In!
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SingIn;
