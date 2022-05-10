import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainTheme from './styled component/MainTheme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styled component/Global'
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={MainTheme}>
    <GlobalStyle />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


