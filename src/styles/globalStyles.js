import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html{
    font-size:62.5%;
    scroll-behavior:smooth;
    background-color:${({ theme }) => theme.colors.green[0]};
    height:100%;
    width:100%;
  }
  body{
    font-size:1.6rem;
    font-family: ${({ theme }) => theme.font.family.secondary};
  }
  h1,h2,h3,h4,h5,h6{
    font-family: ${({ theme }) => theme.font.family.primary}, sans-serif;
    margin:${({ theme }) => theme.spacings.large} 0;
  }
  p{
    margin:0;
    font-family: ${({ theme }) => theme.font.family.secondary}, sans-serif;
  }
  ul,ol{
    margin:${({ theme }) => theme.spacings.medium} 0;
    padding:${({ theme }) => theme.spacings.medium} 0;
  }
`;
