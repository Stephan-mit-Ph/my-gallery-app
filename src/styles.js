import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  p {
    hyphens: auto;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  i {
    font-size: 0.6rem;
  }
`;
