import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useFilter } from "../../hooks/useFilter";
import { api } from "../../services/api";
import { MovieCart } from "../MovieCart";

import styles from "./styles.module.scss";

interface IProps {
  value: {
    results: Array<{
      poster_path: string;
      title: string;
      release_date: string;
      id?: number;
      genre_ids: Array<[]>;
    }>;
  };
}

const baseUrlMovieDBImage =
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

export const MovieListing = () => {
  const { isLoading, value, error } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIEDB_KEY}&page=1`
  );

  if (isLoading) {
    return "Loading";
  }

  if (error) {
    return "Error";
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {value?.results.map((item: any) => (
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
