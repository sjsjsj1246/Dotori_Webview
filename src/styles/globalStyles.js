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
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EAEAEA;
  }

  #__next {
    width: 360px;
    height: 640px;
    background: white;
  }
`;

export default GlobalStyle;
