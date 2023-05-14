const API = "http://localhost:5000";

export const getData = async (text: string) => {
  try {
    const res = await fetch(`${API}/search?q=${text}`);
    return await res.json();
  } catch (e) {
    return "";
  }
};
