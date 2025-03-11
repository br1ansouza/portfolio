import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: 'Inter', sans-serif;
    transition: all 0.3s ease-in-out;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  a, button {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  a:hover, button:hover {
    color: ${({ theme }) => theme.colors.hover};
  }

  .card {
    background-color: ${({ theme }) => theme.colors.cardBackground};
    border-radius: 12px;
    padding: 16px;
    transition: 0.3s ease-in-out;
  }

  .card:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.background};
  }
`;
