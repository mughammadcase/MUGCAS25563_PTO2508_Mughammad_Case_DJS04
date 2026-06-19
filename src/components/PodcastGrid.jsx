import PodcastCard from "./PodcastCard";

/**
 * Displays a responsive grid of podcast preview cards.
 *
 * Receives podcast data from the parent component and renders a PodcastCard component for each podcast returned by the API.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.podcasts - Array of podcast objects.
 * @returns {JSX.Element} Responsive podcast grid.
 */
export default function PodcastGrid({ podcasts }) {
  return (
    <section className="podcast-grid">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </section>
  );
}
