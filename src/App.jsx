import { useContext } from "react";
import { PodcastContext } from "./context/PodcastContext";

function App() {
  const { podcasts, loading, error } = useContext(PodcastContext);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>Podcasts</h1>

      <p>Total podcasts: {podcasts.length}</p>
    </>
  );
}

export default App;
