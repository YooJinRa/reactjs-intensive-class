import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul li, ol li {
    list-style: none;
  }
`

export default GlobalStyled;