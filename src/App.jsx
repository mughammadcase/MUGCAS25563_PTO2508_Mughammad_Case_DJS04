import { useContext } from "react";
import { PodcastContext } from "./context/PodcastContext";
import PodcastGrid from "./components/PodcastGrid";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SortSelect from "./components/SortSelect";
import styles from "./App.module.css";

function App() {
  const { podcasts, loading, error, searchTitle, sortOrder } =
    useContext(PodcastContext);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />

      <section className={styles.controls}>
        <SearchBar />
        <SortSelect />
      </section>

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
