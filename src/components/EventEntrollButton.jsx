import styles from "../styles/EventEnrollButton.module.css";
import { enrollBtnText } from "../constants/text.js";

const EventEntrollButton = () => {
  return (
    <a
      href="https://event-us.kr/vim/event/95199"
      className={styles.btn}
      target="_blank"
    >
      <button className={styles["btn-text"]}>{enrollBtnText}</button>
    </a>
  );
};
export default EventEntrollButton;
