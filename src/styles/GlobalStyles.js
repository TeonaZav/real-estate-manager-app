import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 

  :root {
    /* Colors */
    --clr-green: #45A849;
    --clr-red: #F93B1D;
    --clr-blue-grey:#2D3648;
    --clr-white: #ffffff;
    --clr-dark: #021526;
    --clr-secondary: #808A93;
    --clr-bg-primary: #ffffff;

    --clr-text-primary: #021526;
    --clr-text-secondary: #808A93;
    --clr-text-secondary-dark: #676E76;

    --clr-error: #F93B1D;
    --clr-success: #45A849;
    --clr-btn-primary:#F93B1D;
    --clr-btn-primary-hover: #DF3014;
    --clr-btn-secondary:#808A93;
    --clr-btn-secondary-hover:#808A93
    --clr-btn-primary-hover: #DF3014;


    /* Font Sizes */
    --fs-xl: 4.8rem;
    --fs-lg: 3.2rem;
    --fs-medium: 2.4rem;
    --fs-small: 1.6rem;
    --fs-xs: 1.4rem;
  
    --fs-body: 1.6rem;
    --fs-button: 1.6rem;
    --fs-subtitle: 1.6rem;
    --fs-label: 1.4rem;
    --fs-input: 1.4rem;
    --fs-hint: 1.4rem;
--clr-tranparent: #00000009;
    /* Borders */
    --border: 1px solid #DBDBDB; 
  }


  *,
  *::before,
  *::after { 
    margin:0;
    padding: 0;
    box-sizing: border-box;
  } 

  html {
    font-size: 62.5%; 
  }


  @font-face {
  font-family: "FiraGO";
  src: url("/fonts/FiraGO-Regular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  /* font-display: swap; */
  font-display: block;
}

@font-face {
  font-family: "FiraGO";
  src: url("/fonts/FiraGO-Medium.woff") format("opentype");
  font-weight: 500;
  font-style: normal;
  /* font-display: swap; */
  font-display: block;
}

@font-face {
  font-family: "FiraGO";
  src: url("/fonts/FiraGO-Bold.woff2") format("opentype");
  font-weight: 700;
  font-style: normal;
  /* font-display: swap; */
  font-display: block;
}
  
@font-face {
  font-family: 'Helvetica Neue';
  src: url('/fonts/HelveticaNeue-Medium.otf') format('opentype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}


  ul, ol{
    list-style-type: none;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden; 
  }


  body {
    font-family: 'FiraGO', sans-serif;
    background-color:var(--clr-bg-primary); 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
  } 

  #root {
    height: 100%;
  }

  input, select, textarea, button{ font-family: 'FiraGO', 'Helvetica Neue', Arial, sans-serif;}
`;
