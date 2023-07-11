import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  background: ${({ theme }) => theme.colors.backgroundColorLight};
  min-height: 100vh;
  margin: 0;

  font-style: normal;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ul,
ol {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  padding: 0;
  border: none;
  background-color: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
