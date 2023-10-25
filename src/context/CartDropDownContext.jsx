import { createContext, useState, useEffect } from "react";

//
//helper function
const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contain product
  const existingCartItem = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });
  // if yes we found a match increment a new array with new obj + add 1 to quantity
  if (existingCartItem) {
    return cartItems.map((item) => {
      return item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeFromItem = (cartItems, removeCartItem) => {
  //find item
  const existingCartItem = cartItems.find((item) => {
    return item.id == removeCartItem.id;
  });
  //check if quantity is = to 1, yes = remove
  if (existingCartItem.quantity == 1) {
    return cartItems.filter((item) => item.id !== removeCartItem.id);
  }
  //retrun mew obj with matching cart quantity
  return cartItems.map((item) => {
    return item.id == removeCartItem.id
      ? { ...item, quantity: item.quantity - 1 }
      : item;
  });
};
//
//
const deleteFromCheckout = (cartItems, deleteCartItem) => {
  return cartItems.filter((item) => item.id !== deleteCartItem.id);
};
//
//
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItem: () => {},
  deleteItem: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  //
  //
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (toatl, cartItem) => toatl + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  //
  //
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);
  //
  //
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  //
  //
  const removeItem = (removeCartItem) => {
    setCartItems(removeFromItem(cartItems, removeCartItem));
  };
  //
  //
  const deleteItem = (deleteCartItem) => {
    setCartItems(deleteFromCheckout(cartItems, deleteCartItem));
  };
  //
  //
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItem,
    deleteItem,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
