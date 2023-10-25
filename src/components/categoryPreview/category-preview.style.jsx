import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryPreviewStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const LinkTitleStyle = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const PreviewStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

// .category-preview-container {
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 30px;
//   // background-color: green;

// .title {
//   font-size: 28px;
//   margin-bottom: 25px;
//   cursor: pointer;
// }

//   .preview {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     column-gap: 20px;
//   }
// }
