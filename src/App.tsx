import { useState } from 'react';
import TextInput from './components/TextInput';
import useSearchResults from './hooks/useSearchResult';

function App() {
  const [searchText, setSearchText] = useState('');
  const { isLoading, results } = useSearchResults(searchText);

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
