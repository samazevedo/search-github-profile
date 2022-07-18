import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
 
  }
  html {
    font-family:  ${({ theme }) => theme.fonts.primary};
    font-size: 10px;
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
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0%;
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

  /*http://support.google.com/chrome/?hl=en*/
::-webkit-scrollbar {
height: 0.1rem !important;
overflow: visible !important;
width: 0.7rem !important;
}

::-webkit-scrollbar-thumb {
background: ${({ theme }) => theme.colors.bajaBlue} !important;
background-clip: padding-box !important;
border: 2px solid transparent !important;
border-image: initial !important;
min-height: 28px !important;
padding: 100px 0px 0px !important;
/*box-shadow: rgba(0, 0, 0, 0.0980392) 1px 1px 0px inset, rgba(0, 0, 0, 0.0666667) 0px -1px 0px inset !important;*/
}

/* :window-inactive inspired by cssTricks */
::-webkit-scrollbar-thumb:hover {
background: ${({ theme }) => theme.colors.macawGreen} !important;
background-clip: padding-box !important;
}

/* :window-inactive inspired by cssTricks */
::-webkit-scrollbar-thumb:window-inactive {
background: -webkit-linear-gradient(left, rgba(58,58,58,1) 0%,rgba(80,80,80,1) 100%) !important;
background-clip: padding-box !important;
}

::-webkit-scrollbar-button {
height: 0px !important;
width: 0px !important;
}

::-webkit-scrollbar-track {
background: #000!important;*/
/*background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAAACXZwQWcAAABkAAAAZACHJl7mAAAASUlEQVRo3u3PQQEAIAzDQOoE/6bAyaaiv0sUXN799TOnX0hISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIqi0mjfaIwOmF7QAAAABJRU5ErkJggg==) repeat !important;
/*background-clip: padding-box !important;*/
/*border: 2px solid white !important;*/
/*border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAAACXZwQWcAAABkAAAAZACHJl7mAAAASUlEQVRo3u3PQQEAIAzDQOoE/6bAyaaiv0sUXN799TOnX0hISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIqi0mjfaIwOmF7QAAAABJRU5ErkJggg==) 3 repeat!important;*/
/*border-image: initial !important;*/
box-shadow: inset 1px 0px 5px -2px rgba(0,0,0,0.3);
}

::-webkit-scrollbar-corner {
background: transparent !important;
}
`
