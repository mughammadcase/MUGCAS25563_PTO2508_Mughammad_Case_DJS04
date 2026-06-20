import { useContext } from "react";
import { PodcastContext } from "./context/PodcastContext";
import PodcastGrid from "./components/PodcastGrid";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const { podcasts, loading, error, searchTitle, sortOrder } =
    useContext(PodcastContext);
  console.log(sortOrder);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <SearchBar />

      {podcasts.length > 0 ? (
        <PodcastGrid podcasts={podcasts} />
      ) : (
        <div>
          <p>
            No podcasts found
            {searchTitle.trim() && ` for "${searchTitle}"`}.
          </p>
        </div>
      )}
    </>
  );
}

export default App;
