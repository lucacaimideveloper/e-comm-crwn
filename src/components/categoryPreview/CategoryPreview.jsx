import React from "react";
import ProductCard from "../../productCard/ProductCard";
import { Link } from "react-router-dom";
import {
  PreviewStyle,
  CategoryPreviewStyle,
  LinkTitleStyle,
} from "./category-preview.style";
import "./category-preview.style";
//
//
const CategoryPreview = ({ title, products }) => {
  //
  //
  return (
    <CategoryPreviewStyle>
      <h2>
        <LinkTitleStyle to={title}>{title.toUpperCase()}</LinkTitleStyle>
      </h2>
      <PreviewStyle>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewStyle>
    </CategoryPreviewStyle>
  );
};

export default CategoryPreview;
