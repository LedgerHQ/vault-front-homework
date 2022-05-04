type TransactionNotif = {
    id: string;
    type: 'TRANSACTION_RECEIVED' | 'TRANSACTION_SENT';
    data: {
        amount: number;
        from: string;
        id: number;
        to: string;
        unit: string;
    };
};

type CreationNotif = {
    id: string;
    type: 'ACCOUNT_CREATED';
    data: {
        id: number;
        name: string;
        currency: string;
    };
};

export type Notif = TransactionNotif | CreationNotif;
