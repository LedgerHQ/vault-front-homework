import type { Notif } from "../types";

type Props = {
  data: Notif;
};

export const Result = ({ data }: Props) => {
  console.log({ data });

  return (
    <div className="border border-black p-4 flex gap-4 items-center mt-4 justify-between">
      {data.type === "ACCOUNT_CREATED" && (
        <>
          <div className="flex gap-4">
            <div className="w-6 h-6 bg-red-400 rounded-full"></div>
            <div>{"Created"}</div>
          </div>
          <div>{data.data.currency}</div>
          <div>{data.data.name}</div>
        </>
      )}
      {data.type === "TRANSACTION_RECEIVED" && (
        <>
          <div className="flex gap-4">
            <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
            <div>{"Received"}</div>
          </div>
          <div>
            {data.data.amount} {data.data.unit}
          </div>
          <div className="truncate text-right">
            {"From "}
            {data.data.from}
          </div>
        </>
      )}
      {data.type === "TRANSACTION_SENT" && (
        <>
          <div className="flex gap-4">
            <div className="w-6 h-6 bg-green-400 rounded-full"></div>
            <div>{"Sent"}</div>
          </div>
          <div>
            {data.data.amount} {data.data.unit}
          </div>
          <div className="truncate text-right">
            {"To "}
            {data.data.to}
          </div>
        </>
      )}
    </div>
  );
};
