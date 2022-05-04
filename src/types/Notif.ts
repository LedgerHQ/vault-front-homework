export type Notif = {
    id: string;
    type: string;
    data: {
        amount: number;
        from: string;
        id: number;
        to: string;
        unit: string;
    };
};
