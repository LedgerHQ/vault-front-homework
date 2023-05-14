import { useEffect, useState } from "react";
import { Notif } from "../../types";
import { getData } from "../../services";

type UseDataProps = {
  searchValue: string;
};

export const useData = ({ searchValue }: UseDataProps) => {
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<Notif[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getData(searchValue);
      setResults(data);
      setLoading(false);
    })();
  }, [searchValue, setLoading, setResults]);

  return { isLoading, results };
};
