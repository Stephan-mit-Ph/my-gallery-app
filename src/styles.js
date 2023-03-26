import { createGlobalStyle } from "styled-components";
import { Work_Sans } from "@next/font/google";

const WorkSans = Work_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default createGlobalStyle`

:root{
  --font-family: ${WorkSans.style.fontFamily}, serif;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: var(--font-family);
    background-color: #FAFAFA;
  }

  h2 {
    font-weight: 500;
  }

  a {
    font-size: 1rem;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;
