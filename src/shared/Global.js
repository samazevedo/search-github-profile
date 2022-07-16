import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=K2D:wght@100&display=swap');
  *,
  *:before,
  *:after {
    box-sizing: border-box;
 
  }
  html {
    font-family:  ${({ theme }) => theme.fonts.primary};
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
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
