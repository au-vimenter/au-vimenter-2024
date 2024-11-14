import styles from "../styles/EventEnrollButton.module.css";

const EventEntrollButton = () => {
  return (
    <a
      href="https://event-us.kr/vim/event/95199"
      className={styles.btn}
      target="_blank"
    >
      <button className={styles["btn-text"]}>참가 신청하기</button>
    </a>
  );
};
export default EventEntrollButton;
