import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    max-width: 100vw;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  body, button, input, textarea {
    font-family: "Roboto Slab", serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`