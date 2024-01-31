export interface SearchResult {
  id: string;
  type: string;
  data: {
    id: number;
    amount: number;
    unit: string;
    from: string;
    to: string;
  };
}

export interface SearchResultHook {
  isLoading: boolean;
  results: SearchResult[] | null;
}
