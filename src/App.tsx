import { useEffect, useState } from "react";
import { Loader } from "./components/Loader";
import { Result } from "./components/Result";
import TextInput from "./components/TextInput";
import { getData } from "./services";
import type { Notif } from "./types";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<Notif[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getData(searchText);
      setResults(data);
      setLoading(false);
    })();
  }, [searchText, setLoading, setResults]);

  console.log({ results });

  return (
    <div>
      <TextInput
        value={searchText}
        onChange={setSearchText}
        placeholder="Type to filter events"
      />
      {isLoading && <Loader />}
      {!isLoading && results.length === 0 && <div>{"No result found"}</div>}
      {!isLoading && results.length > 0 && (
        <div>
          {results.map((r) => (
            <Result data={r} key={r.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
