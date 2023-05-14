import { useState } from "react";
import { Loader } from "../Loader/Loader";
import { Result } from "../Result/Result";
import { TextInput } from "../TextInput/TextInput";
import { useData } from "./useData";

export const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { isLoading, results } = useData({ searchValue });

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
        <div
          data-testid="NoResult"
          className="flex justify-center items-center text-xl h-96"
        >
          {"No result found"}
        </div>
      )}
      {!isLoading && results.length > 0 && (
        <div data-testid="ResultsFound">
          <div className="text-center mt-4" data-testid="resultLabel">
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
          data-testid="Reset"
          onClick={() => {
            setSearchText("");
            setSearchValue("");
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearchText("");
              setSearchValue("");
            }
          }}
        >
          {"Reset"}
        </div>
      )}
    </div>
  );
};
