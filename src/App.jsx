import { useContext } from "react";
import { PodcastContext } from "./context/PodcastContext";
import { formatDate } from "./utils/formatDate";
import { genreService } from "./utils/genreService";

function App() {
  const { podcasts, loading, error } = useContext(PodcastContext);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;
  console.log(formatDate.format(new Date()));
  console.log(genreService.getNames([1, 2]));

  return (
    <>
      <h1>Podcasts</h1>

      <p>Total podcasts: {podcasts.length}</p>
    </>
  );
}

export default App;
