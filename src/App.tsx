import { useState } from "react";
import { Filter } from "./components/Filter";
import { Header } from "./components/Header";

import styles from "./styles/home.module.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.homeContainer}>
      <Header />
      <Filter />
    </div>
  );
}

export default App;
