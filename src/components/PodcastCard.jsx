import { genreService } from "../utils/genreService";
import { formatDate } from "../utils/formatDate";

/**
 * Displays a preview of a podcast including its artwork, title, season count, genres, and last updated date.
 *
 * @param {Object} props - Component props
 * @param {Object} props.podcast - Podcast data object
 * @param {string} props.podcast.id - Unique podcast identifier
 * @param {string} props.podcast.title - Podcast title
 * @param {string} props.podcast.image - Podcast artwork URL
 * @param {number} props.podcast.seasons - Number of seasons
 * @param {number[]} props.podcast.genres - Array of genre IDs
 * @param {string} props.podcast.updated - ISO date string of last update
 * @returns {JSX.Element} Rendered podcast preview card
 */
export default function PodcastCard({ podcast }) {
  const genreNames = genreService.getNames(podcast.genres);
  const updatedDate = formatDate.format(podcast.updated);

  return (
    <article className="podcast-card">
      <img
        src={podcast.image}
        alt={podcast.title}
        className="podcast-card-image"
      />

      <div className="podcast-card-content">
        <h2 className="podcast-card-title">{podcast.title}</h2>

        <p className="podcast-card-seasons">
          {podcast.seasons} season{podcast.seasons !== 1 ? "s" : ""}
        </p>

        <div className="podcast-card-genres">
          {genreNames.map((name) => (
            <span key={name} className="genre-tag">
              {name}
            </span>
          ))}
        </div>

        <p className="podcast-card-updated">{updatedDate}</p>
      </div>
    </article>
  );
}
