import { Filter } from "../../components/Filter";
import { MovieListing } from "../../components/MoviesListing";
import { Pagination } from "../../components/Pagination";

import styles from "./home.module.scss";

export const Home = () => {
  return (
    <main className={styles.homeContainer}>
      <Filter />
      <MovieListing />
      <Pagination />
    </main>
  );
};
