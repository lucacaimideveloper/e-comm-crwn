import React from "react";
import { Outlet } from "react-router-dom";
import DirectoryComponet from "../../components/directory/Directory.componet";
const Home = () => {
  //
  //
  return (
    <div>
      <Outlet />
      <DirectoryComponet />
    </div>
  );
};

export default Home;
