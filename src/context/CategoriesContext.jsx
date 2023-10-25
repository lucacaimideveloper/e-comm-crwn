import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../../src/shop-data.js";
import { getCategoriesAndObject } from "../utils/utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  //
  //
  const [categoriesMap, setCategoriesMap] = useState({});
  //
  //after verify 'done' delete use effect this is one of
  //similar to russel axios request
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndObject();
      // console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  //
  //
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
