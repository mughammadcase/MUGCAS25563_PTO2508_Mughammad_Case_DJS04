import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import styles from "./SearchBar.module.css";

/**
 * Search input for filtering podcasts by title.
 *
 * @returns {JSX.Element}
 */
export default function SearchBar() {
  const { searchTitle, setSearchTitle } = useContext(PodcastContext);

  function handleChange(event) {
    setSearchTitle(event.target.value);
  }

  return (
    <div className={styles.searchBar}>
      <input
        id="podcast-search"
        type="text"
        value={searchTitle}
        onChange={handleChange}
        placeholder="Search"
        className={styles.input}
      />
    </div>
  );
}
