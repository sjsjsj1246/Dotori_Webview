import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Bold, -apple-system, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EAEAEA;
  }

  #__next {
    width: 100%;
    height: 100%;
    background: white;
  }

  @font-face {
    font-family: "light";
    font-weight: 300;
    src: url("/fonts/FuturaStdLight.otf") format("truetype");
  }

  @font-face {
    font-family: "medium";
    font-weight: 500;
    src: url("/fonts/FuturaStdMedium.otf") format("truetype");
  }

  @font-face {
    font-family: "bold";
    font-weight: 700;
    src: url("/fonts/FuturaStdBold.otf") format("truetype");
  }
`;

export default GlobalStyle;
