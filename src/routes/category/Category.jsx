// import React, { useEffect, useState } from "react";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import { useParams } from "react-router-dom";
import "./category.styles.scss";
import ProductCard from "../../productCard/ProductCard";
//
//
const Category = () => {
  //use params gave the value as an obj
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="catTitle">{category.toUpperCase()}</h2>

      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
