const API = 'http://localhost:5000';

export default async function fetchSearchResults(searchText: string) {
  try {
    const res = await fetch(`${API}/search?q=${searchText}`);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
