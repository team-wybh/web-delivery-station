import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`

  ${reset}
  *{
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    font-size: 12px;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;