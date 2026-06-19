import { createContext, useEffect, useState } from "react";
import { fetchPodcasts } from "../api/fetchPodcasts";

export const PodcastContext = createContext();

export function PodcastProvider({ children }) {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPodcasts() {
      try {
        const data = await fetchPodcasts();

        console.log("API DATA:", data);

        setPodcasts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadPodcasts();
  }, []);

  const value = {
    podcasts,
    loading,
    error,
  };

  return (
    <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>
  );
}
