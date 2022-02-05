import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { MovieListing } from "../../components/MoviesListing";
import { Pagination } from "../../components/Pagination";

import styles from "./home.module.scss";

interface IProps {
  id: number;
}

export const Home = () => {
  return (
    <main className={styles.homeContainer}>
      <Filter />
      <MovieListing />
      <Pagination />
    </main>
  );
};
