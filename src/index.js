import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
import store from './store';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeProvider theme={ theme }>
            <Provider store={ store } >
                <GlobalStyle />
                <App />
            </Provider>
        </ThemeProvider>
    </BrowserRouter>
);