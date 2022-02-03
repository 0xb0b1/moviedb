import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { MovieIdProvider } from "./hooks/useMovieId";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";

function App() {
  return (
    <MovieIdProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-details" element={<MovieDetails />} />
      </Routes>
    </MovieIdProvider>
  );
}

export default App;
