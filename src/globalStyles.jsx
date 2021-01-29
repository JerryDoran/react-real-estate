import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
}
  
  html, body {
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
