import React from 'react';
import styled from 'styled-components';
import { Notif } from 'types/Notif';

const NotifItem = ({ notification }: { notification: Notif }) => {
    return <Card>{JSON.stringify(notification)}</Card>;
};

const Card = styled.div`
    border-radius: 0.5rem;
    display: flex;
    padding: 1rem;
    box-shadow: 0 1px 6px 1px rgba(0, 0, 0, 0.2);
`;

export default NotifItem;
