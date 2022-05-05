import React, { useState } from 'react';
import styled from 'styled-components';

import Input from 'components/Input';
import Spinner from 'components/Spinner';
import type { Notif } from 'types/Notif';
import NotifItem from 'components/NotifItem';
import useSWR from 'swr';
import noResultsImage from 'url:images/noResults.png';
import errorImage from 'url:images/errorImage.png';
import { Typography } from '@mui/material';

const App = () => {
    const [searchText, setSearchText] = useState('');

    const { data: results, error, isValidating } = useSWR<Notif[]>(`/search?q=${searchText}`);
    const noResults = !isValidating && results?.length === 0;

    if (error) {
        return (
            <StyledDiv>
                <StyledImg height={300} width={350} src={errorImage} alt="An error happened ..!" />
                <Typography>{`An error happened ..!`}</Typography>
            </StyledDiv>
        );
    }

    return (
        <Container>
            <Input
                value={searchText}
                onChange={setSearchText}
                placeholder="Type to filter events"
            />
            {!results && !error ? (
                <Spinner />
            ) : results ? (
                <Container>
                    {noResults && (
                        <StyledDiv>
                            <StyledImg
                                height={300}
                                width={350}
                                src={noResultsImage}
                                alt="No results found..."
                            />
                            <Typography>{`No results found...`}</Typography>
                        </StyledDiv>
                    )}
                    {results.map((notification) => (
                        <NotifItem key={notification.id} notification={notification} />
                    ))}
                </Container>
            ) : null}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    width: 100%;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
`;

const StyledImg = styled.img`
    margin-bottom: 1rem;
    margin-top: 15rem;
`;

export default App;
