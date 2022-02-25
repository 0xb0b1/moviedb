import { useFetch } from "../../hooks/useFetch";
import { useMovieId } from "../../context/useMovieId";
import { converDurationToTimeString } from "../../utils/convertDurationToTimeString";

const movieDetails = {
  adult: false,
  backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
  belongs_to_collection: {
    id: 531241,
    name: "Spider-Man (Avengers) Collection",
    poster_path: "/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg",
    backdrop_path: "/AvnqpRwlEaYNVL6wzC4RN94EdSd.jpg",
  },
  budget: 200000000,
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
  ],
  homepage: "https://www.spidermannowayhome.movie",
  id: 634649,
  imdb_id: "tt10872600",
  original_language: "en",
  original_title: "Spider-Man: No Way Home",
  overview:
    "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
  popularity: 17656.865,
  poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  production_companies: [
    {
      id: 420,
      logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
      name: "Marvel Studios",
      origin_country: "US",
    },
    {
      id: 84041,
      logo_path: "/nw4kyc29QRpNtFbdsBHkRSFavvt.png",
      name: "Pascal Pictures",
      origin_country: "US",
    },
    {
      id: 5,
      logo_path: "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
      name: "Columbia Pictures",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2021-12-15",
  revenue: 1738889808,
  runtime: 148,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
    {
      english_name: "Tagalog",
      iso_639_1: "tl",
      name: "",
    },
  ],
  status: "Released",
  tagline: "The Multiverse unleashed.",
  title: "Spider-Man: No Way Home",
  video: false,
  vote_average: 8.4,
  vote_count: 6816,
};

const baseUrlMovieDBImage =
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

import styles from "./styles.module.scss";

interface DataProps {
  poster_path: string;
  title: string;
  genres: Array<{
    id: number;
    name: string;
  }>;
  runtime: string;
}

export const MovieDetails = () => {
  const { movieId } = useMovieId();

  const { isLoading, value, error } = useFetch<DataProps[]>(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.MOVIEDB_KEY}&page=1`
  );

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  console.log(movieId);
  console.log(value);

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <img src={`${baseUrlMovieDBImage}${value?.poster_path}`} alt="poster" />
      </div>

      <section className={styles.description}>
        <h2>{value?.title}</h2>

        {value?.genres.map((item: { id: number; name: string }) => (
          <span key={item.id}>{item.name},</span>
        ))}
        <span>{converDurationToTimeString(value?.runtime)}</span>
      </section>
    </div>
  );
};
