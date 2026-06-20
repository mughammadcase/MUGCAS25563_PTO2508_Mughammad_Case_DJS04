import { createContext, useEffect, useState } from "react";
import { fetchPodcasts } from "../api/fetchPodcasts";

export const PodcastContext = createContext();

export function PodcastProvider({ children }) {
  const [allPodcasts, setAllPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [sortOrder, setSortOrder] = useState("date-desc");

  useEffect(() => {
    async function loadPodcasts() {
      try {
        const data = await fetchPodcasts();
        setAllPodcasts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadPodcasts();
  }, []);

  const podcasts = allPodcasts.filter((podcast) =>
    podcast.title.toLowerCase().includes(searchTitle.toLowerCase().trim()),
  );

  const value = {
    podcasts,
    loading,
    error,
    searchTitle,
    setSearchTitle,
    sortOrder,
    setSortOrder,
  };

  return (
    <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>
  );
}
