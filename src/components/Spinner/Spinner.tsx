import React from 'react';
import styled from 'styled-components';

const Spinner = () => {
    return <StyledSpinner />;
};

const StyledSpinner = styled.div`
    width: 4rem;
    height: 4rem;
    border: 5px solid #f3f3f3;
    border-top: 6px solid #9c41f2;
    border-radius: 100%;
    margin: auto;
    visibility: visible;
    animation: spin 1s infinite linear;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export default Spinner;
