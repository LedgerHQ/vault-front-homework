import { Notif } from 'types/Notif';
import { EVENT_TYPES } from '../constants';

export const getEventType = (notification: Notif) => {
    switch (notification.type) {
        case EVENT_TYPES.ACCOUNT_CREATED:
            return `${notification.data.currency} Account`;
        case EVENT_TYPES.TRANSACTION_RECEIVED:
            return 'Received';
        case EVENT_TYPES.TRANSACTION_SENT:
            return 'Sent';
    }
};
