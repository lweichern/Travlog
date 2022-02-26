import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&family=Roboto:wght@300&display=swap');

* {
  box-sizing: border-box;
}
body {
    background: ${({ theme }) => theme.colors.body};
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    overflow-x: hidden;
  }`;

// #1e1536 - dark blue
// #f9fff9 - mint
// #e0ffee - darker mint
// #7c98ab - light blue
