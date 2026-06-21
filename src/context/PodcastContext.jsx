import { createContext, useEffect, useState } from "react";
import { fetchPodcasts } from "../api/fetchPodcasts";

export const PodcastContext = createContext();

export function PodcastProvider({ children }) {
  const [allPodcasts, setAllPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [sortOrder, setSortOrder] = useState("date-desc");
  const [selectedGenre, setSelectedGenre] = useState("all");

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

  const filteredPodcasts = allPodcasts.filter((podcast) =>
    podcast.title.toLowerCase().includes(searchTitle.toLowerCase().trim()),
  );

  const podcasts = [...filteredPodcasts].sort((a, b) => {
    switch (sortOrder) {
      case "date-desc":
        return new Date(b.updated) - new Date(a.updated);

      case "date-asc":
        return new Date(a.updated) - new Date(b.updated);

      case "title-asc":
        return a.title.localeCompare(b.title);

      case "title-desc":
        return b.title.localeCompare(a.title);

      default:
        return 0;
    }
  });

  const value = {
    podcasts,
    loading,
    error,
    searchTitle,
    setSearchTitle,
    sortOrder,
    setSortOrder,
    selectedGenre,
    setSelectedGenre,
  };

  return (
    <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>
  );
}
