const BASE_URL = process.env.REACT_APP_API;
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchService = async (endpoint) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error("API request failed");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(" API Error:", error);
    throw error;
  }
};

export const getRandomMovie = async () => {
  const num = Math.floor(Math.random() * 10) + 1;
  const data = await fetchService(`/discover/movie?page=${num}`);
  return data.results[num]; 
};

export const searchTMDB = async (query, category = "multi", page = 1) => {
  const data = await fetchService(
    `/search/${category}?query=${encodeURIComponent(query)}&page=${page}`
  );
  return data;
};
export const getTrendingMovies = async (period) => {
  const data = await fetchService(`/trending/movie/${period}`);
  return data;
};
export const getTrendingShows = async (period) => {
  const data = await fetchService(`/trending/tv/${period}`);
  return data;
};