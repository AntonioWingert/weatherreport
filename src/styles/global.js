import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Raleway, sans-serif;
    background-color: #100E1D;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  };

  html {
    width: 100vw;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }
`;