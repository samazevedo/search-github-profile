import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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
    background-color: ${({ theme }) => theme.colors.boneWhite};
    color: ${({ theme }) => theme.colors.scubaBlue};
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
  h1 {
    font-size: ${({ theme }) => theme.fontsize.xxxlarge};
  }
  h2 {
    font-size: ${({ theme }) => theme.fontsize.xxlarge};
  }
  h3 {
    font-size: ${({ theme }) => theme.fontsize.xlarge};
  }
  h4 {
    font-size: ${({ theme }) => theme.fontsize.large};
  }
`
