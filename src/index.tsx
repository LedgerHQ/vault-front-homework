import React from 'react';
import { render } from 'react-dom';

import App from './App';
import GlobalStyle from './GlobalStyle';

const rootNode = document.getElementById('root');

render(
    <>
        <GlobalStyle />
        <App />
    </>,
    rootNode,
);
