import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.5;
    background-color: #f4f4f9;
    color: #333;
    padding: 1rem;
  }

  h1, h2 {
    color: #2c3e50;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
  }

  th, td {
    padding: 0.75rem;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f8f9fa;
    text-align: left;
  }

  a {
    color: #3498db;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  input, select, button {
    font-size: 1rem;
    padding: 0.5rem;
    margin: 0.5rem;

    @media screen and (max-width: 768px) {
      margin: 0.5rem 0;
      display: block;
    }
  }
`;
