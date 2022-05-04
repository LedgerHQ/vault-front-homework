import React, { useState } from 'react';
import styled from 'styled-components';

import Input from 'components/Input';
import Spinner from 'components/Spinner';
import type { Notif } from 'types/Notif';
import NotifItem from 'components/NotifItem';
import useSWR from 'swr';

const App = () => {
    const [searchText, setSearchText] = useState('');

    const { data: results, error } = useSWR<Notif[]>(`/search?q=${searchText}`);

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
    height: 100%;
    width: 100%;
`;

export default App;
