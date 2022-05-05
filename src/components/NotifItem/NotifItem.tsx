import React from 'react';
import styled from 'styled-components';
import { Notif } from 'types/Notif';
import { Grid, Paper, Typography } from '@mui/material';
import { EVENT_TYPES } from '../../constants';
import { getEventType } from 'helpers/utils';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const getIcon = (type: string) => {
    switch (type) {
        case EVENT_TYPES.ACCOUNT_CREATED:
            return <AccountBalanceWalletIcon />;
        case EVENT_TYPES.TRANSACTION_RECEIVED:
            return <CallReceivedIcon />;
        case EVENT_TYPES.TRANSACTION_SENT:
            return <ArrowRightAltIcon />;
    }
};

const NotifItem = ({ notification }: { notification: Notif }) => {
    return (
        <StyledPaper>
            <StyledGrid container>
                <StyledGrid item xs={3}>
                    <StyledDiv>{getIcon(notification.type)}</StyledDiv>
                    <Typography>{getEventType(notification)}</Typography>
                </StyledGrid>
                <StyledGrid item xs={3}>
                    <Typography>
                        {notification.type === EVENT_TYPES.ACCOUNT_CREATED
                            ? notification.data.name
                            : `${notification.data.amount} ${notification.data.unit}`}
                    </Typography>
                </StyledGrid>

                <StyledGrid item xs={6} md={6}>
                    <Typography>
                        {notification.type !== EVENT_TYPES.ACCOUNT_CREATED
                            ? notification.type === EVENT_TYPES.TRANSACTION_RECEIVED
                                ? `from ${notification.data.from}`
                                : `to ${notification.data.to}`
                            : 'Created'}
                    </Typography>
                </StyledGrid>
            </StyledGrid>
        </StyledPaper>
    );
};

const StyledPaper = styled(Paper)`
    margin-bottom: 1rem;
    width: 100%;
    padding: 1rem;
`;

const StyledGrid = styled(Grid)`
    display: flex;
`;

const StyledDiv = styled.div`
    margin-right: 0.5rem;
`;

export default NotifItem;
