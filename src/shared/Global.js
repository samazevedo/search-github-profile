import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap);

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;

  }
  img {
    max-width: 100%;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`
