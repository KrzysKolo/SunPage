import { createGlobalStyle } from "styled-components";

export interface PropsGlobalStyle {
  outLine?: string;
  showSmallMenu?: boolean;
  side?: string;
  image?: string;
  checked?: boolean ;
};

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=Poppins:wght@500;600&display=swap');

html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.color.grey50};
    font-family: 'Inter', sans-serif;
  }

  a, button, h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
  }

`;