import { useEffect, useState } from 'react';
import TextInput from './components/TextInput';

const API = 'http://localhost:5000';

type SearchResult = {
  id: string;
  type: string;
  data: {
    id: number;
    amount: number;
    unit: string;
    from: string;
    to: string;
  };
};

function App() {
  const [searchText, setSearchText] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<null | SearchResult[]>(null);

  useEffect(() => {
    const effect = async () => {
      // FIXME there is something wrong with this loading state... to be investigated :D
      setLoading(true);
      const res = await fetch(`${API}/search?q=${searchText}`);
      const data = await res.json();
      setResults(data);
      setLoading(false);
    };
    effect();
  }, [searchText, setLoading, setResults]);

  return (
    <div>
      <TextInput
        value={searchText}
        onChange={setSearchText}
        placeholder="Type to filter events"
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        results && (
          <div>
            {results.map((r) => (
              // TODO we must finalize this integration!! not very pretty like this
              <div key={r.id} className="border border-dashed">
                {JSON.stringify(r)}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default App;
