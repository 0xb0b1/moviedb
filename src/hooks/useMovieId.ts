import { useState } from "react";

export const useMovieId = () => {
  const [movieId, setMovieId] = useState<number>();

  function handleMovieId(id: number) {
    setMovieId(id);
  }

  return { movieId, handleMovieId };
};
