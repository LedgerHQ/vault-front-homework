import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Input from 'components/Input';

const API = 'http://localhost:5000';

type Notif = {
    id: string;
    type: string;
    // FIXME we should *probably* not have this `any`
    data: any;
};

const App = () => {
    const [searchText, setSearchText] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [results, setResults] = useState<null | Notif[]>(null);

    useEffect(() => {
        const effect = async () => {
            // FIXME there is something wrong with this loading state... to be investigated :D
            setLoading(true);
            const res = await fetch(`${API}/search?q=${searchText}`);
            const data = await res.json();
            setResults(data);
        };
        effect();
    }, [searchText, setLoading, setResults]);

    return (
        <Container>
            <Input
                value={searchText}
                onChange={setSearchText}
                placeholder="Type to filter events"
            />
            {isLoading ? (
                <div>{'Loading...'}</div>
            ) : results ? (
                <div>
                    {results.map((r) => (
                        // TODO we must finalize this integration!! not very pretty like this
                        <Item>{JSON.stringify(r)}</Item>
                    ))}
                </div>
            ) : null}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const Item = styled.div`
    border: 2px dashed red;
`;

export default App;
