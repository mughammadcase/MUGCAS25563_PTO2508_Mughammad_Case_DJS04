import { useContext } from "react";
import { PodcastContext } from "./context/PodcastContext";
import PodcastGrid from "./components/PodcastGrid";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const { podcasts, loading, error, searchTitle } = useContext(PodcastContext);

  console.log(podcasts.length);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <SearchBar />
      <PodcastGrid podcasts={podcasts} />
    </>
  );
}

export default App;
