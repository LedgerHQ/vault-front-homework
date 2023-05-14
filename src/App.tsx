import { useEffect, useState } from "react";
import { Loader } from "./components/Loader";
import { Result } from "./components/Result";
import TextInput from "./components/TextInput";
import { getData } from "./services";
import type { Notif } from "./types";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [searchValue, setSearchValue] = useState("");
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

  const resultText = results.length > 1 ? "results" : "result";

  return (
    <div className="flex flex-col">
      <TextInput
        value={searchText}
        onChange={setSearchText}
        placeholder="Type to filter events"
        validateSearch={setSearchValue}
        isLoading={isLoading}
      />
      {isLoading && (
        <div className="flex justify-center items-center text-xl h-96">
          <Loader width={100} height={100} />
        </div>
      )}
      {!isLoading && results.length === 0 && (
        <div className="flex justify-center items-center text-xl h-96">
          {"No result found"}
        </div>
      )}
      {!isLoading && results.length > 0 && (
        <div>
          <div className="text-center mt-4">
            {results.length} {resultText} found !
          </div>
          {results.map((r) => (
            <Result data={r} key={r.id} />
          ))}
        </div>
      )}
      {!isLoading && (
        <div
          className="mt-4 underline cursor-pointer w-3"
          onClick={() => setSearchValue("")}
        >
          {"Reset"}
        </div>
      )}
    </div>
  );
};

export default App;
