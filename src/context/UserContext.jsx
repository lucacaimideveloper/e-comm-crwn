import React, { useState, createContext, useEffect } from "react";
import {
  createUserDocFromAuth,
  onAuthStateChangeListener,
} from "../utils/utils";
//
//value you wont to acces
export const UserContext = createContext({
  setCurrentUser: () => null,

  currentUser: null,
});

//
//provider is the actual component
//provider allow to acces at any of it's child the value
export const UserProvider = ({ children }) => {
  //this is for the state
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  //
  //onAuthStateChange, when a user auth in or auth hour callback will be activated
  useEffect(() => {
    const unsuscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsuscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
