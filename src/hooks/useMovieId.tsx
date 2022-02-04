import { useState, ReactNode, useContext, Context, createContext } from "react";

interface MovieIdProviderProps {
  children: ReactNode;
}

interface MovieIdContextData {
  movieId: number;
  handleMovieId: (id: number) => void;
}

const MovieIdContext: Context<MovieIdContextData> = createContext(
  {} as MovieIdContextData
);

export function MovieIdProvider({ children }: MovieIdProviderProps) {
  const [movieId, setMovieId] = useState(0);

  function handleMovieId(id: number) {
    setMovieId(id);
  }

  return (
    <MovieIdContext.Provider value={{ movieId, handleMovieId }}>
      {children}
    </MovieIdContext.Provider>
  );
}

export function useMovieId() {
  const context = useContext(MovieIdContext);

  return context;
}
