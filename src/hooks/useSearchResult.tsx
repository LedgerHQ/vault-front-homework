import { useState, useEffect } from 'react';
import { SearchResult } from '../types/searchResult';
import fetchSearchResults from '../services/apiServices';

function useSearchResults(searchText: string) {
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<null | SearchResult[]>(null);

  useEffect(() => {
    let isMounted = true;

    const loadAndFetch = async () => {
      setLoading(true);

      try {
        const data = await fetchSearchResults(searchText);

        if (isMounted) {
          setResults(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadAndFetch();

    return () => {
      isMounted = false;
    };
  }, [searchText]);

  return { isLoading, results };
}

export default useSearchResults;
