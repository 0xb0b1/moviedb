import { useFetch } from "../../hooks/useFetch";
import { MovieCart } from "../MovieCart";

import styles from "./styles.module.scss";

interface MovieListingProps {
  results: Array<{
    poster_path: string;
    title: string;
    release_date: string;
    id?: number;
    genre_ids: Array<[]>;
  }>;
}

const baseUrlMovieDBImage =
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

const baseAPIUrl = "https://api.themoviedb.org/3";

export const MovieListing = () => {
  const {
    isLoading,
    value: movieListing,
    error,
  } = useFetch<MovieListingProps>(
    `${baseAPIUrl}/movie/popular?api_key=${process.env.MOVIEDB_KEY}&page=1`
  );

  console.log(movieListing);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {movieListing?.results.map((item: any) => (
          <MovieCart
            poster_path={`${baseUrlMovieDBImage}${item.poster_path}`}
            title={item.title}
            release_date={item.release_date}
            key={item.id}
            // usar o ID para poder acessar o caminho /movie-details/{id}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};
