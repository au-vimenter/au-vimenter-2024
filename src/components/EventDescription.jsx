import styles from "../styles/EventDescription.module.css";

const EventDescription = () => {
  return (
    <div className={styles.text}>
      VimEnter 2024에서 <br />
      Vim에 대한 궁금증이나 고민,
      <div className={styles.break}></div>
      자신만의 노하우나 철학 등을
      <div className={styles.break}></div>
      마음껏 공유하세요.
      <br />
      Vim을 좋아하는 모든 분들을 환영합니다.
    </div>
  );
};

export default EventDescription;
