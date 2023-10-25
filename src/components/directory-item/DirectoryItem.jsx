import React from "react";
import { useNavigate } from "react-router-dom";
// import "./directoryItem.styles.jsx";
import {
  DirectoryItemStyle,
  Body,
  BackgroundImage,
} from "./directoryItem.styles";
//
//
const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();

  const navgateHandler = () => navigate(route);
  return (
    <DirectoryItemStyle onClick={navgateHandler}>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemStyle>
  );
};

export default DirectoryItem;
