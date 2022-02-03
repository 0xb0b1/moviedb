import styles from "./styles.module.scss";
export const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>Ultima</span>
    </div>
  );
};
