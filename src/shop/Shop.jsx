import { Routes, Route } from "react-router-dom";
import Category from "../routes/category/Category.jsx";
import CategoriesPreview from "../routes/categoriesPreview/CategoriesPreview";
import "./shop.styles.scss";
//
//
const Shop = () => {
  //

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      {/* this string only work when the component render */}
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
