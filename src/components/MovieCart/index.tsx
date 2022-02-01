import styles from "./styles.module.scss";

interface IProps {
  poster_path: string;
  title: string;
  release_date: string;
  id?: number;
}

export const MovieCart = ({ poster_path, title, release_date, id }: IProps) => {
  return (
    <div className={styles.containerBox}>
      <div className={styles.contentBox}>
        <img src={poster_path} alt="poster" />

        <span>{title}</span>
        <span>{release_date}</span>
      </div>
    </div>
  );
};
