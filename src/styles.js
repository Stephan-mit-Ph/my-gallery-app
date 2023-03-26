import { createGlobalStyle } from "styled-components";
//import { Work_Sans } from "@next/font/google";

/*const WorkSans = Work_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
});*/

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
