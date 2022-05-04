import React from 'react';
import { render } from 'react-dom';

import App from './App';
import GlobalStyle from './GlobalStyle';
import { SWRConfig } from 'swr';
import { apiRequest } from 'services/ApiRequests';

const rootNode = document.getElementById('root');

render(
    <>
        <GlobalStyle />
        <SWRConfig
            value={{
                shouldRetryOnError: false,
                revalidateOnFocus: false,
                focusThrottleInterval: 3600000,
                fetcher: apiRequest,
            }}
        >
            <App />
        </SWRConfig>
    </>,
    rootNode,
);
