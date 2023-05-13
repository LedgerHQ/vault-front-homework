type Data = {
  id: number;
  amount?: number;
  from?: string;
  to?: string;
  unit?: string;
  name?: string;
  currency?: string;
};

export type Notif = {
  id: number;
  type: "ACCOUNT_CREATED" | "TRANSACTION_SENT" | "TRANSACTION_RECEIVED";
  data: Data;
};
