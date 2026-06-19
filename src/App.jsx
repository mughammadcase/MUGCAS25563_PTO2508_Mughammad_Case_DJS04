import { useContext } from "react";
import { PodcastContext } from "./context/PodcastContext";
import { formatDate } from "./utils/formatDate";
import { genreService } from "./utils/genreService";
import PodcastCard from "./components/PodcastCard";
import PodcastGrid from "./components/PodcastGrid";

function App() {
  const { podcasts, loading, error } = useContext(PodcastContext);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>Podcasts</h1>

      <PodcastGrid podcasts={podcasts} />
    </>
  );
}

export default App;
