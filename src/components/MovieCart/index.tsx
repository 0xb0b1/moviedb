import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useMovieId } from "../../context/useMovieId";

import styles from "./styles.module.scss";

interface IProps {
  poster_path: string;
  title: string;
  release_date: string;
  id: number;
}

export const MovieCart = ({ poster_path, title, release_date, id }: IProps) => {
  const { handleMovieId } = useMovieId();

  return (
    <div className={styles.containerBox}>
      <Link to="movie-details" onClick={() => handleMovieId(id)}>
        <div className={styles.contentBox}>
          <img src={poster_path} alt="poster" />

          <span>{title}</span>
          <span>{release_date}</span>
        </div>
      </Link>
    </div>
  );
};
