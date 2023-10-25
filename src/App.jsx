import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigation from "./routes/home/navigation/Navigation";
import Authentication from "./routes/home/authentication/Authentication";
import Shop from "./shop/Shop";
import Checkout from "./routes/home/checkout/Checkout.jsx";
//
//

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />

        {/* <Route index element={< />}> */}
      </Route>
    </Routes>
  );
};

export default App;
// crown-clothing-db-f9e22
