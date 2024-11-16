import styles from "../styles/EventSupporter.module.css";
import { supporters } from "../constants/text.js";

const EventSupporter = () => {
  return (
    <div className={styles.container}>
      <div>{supporters[0]}</div>
      <div>{supporters[1]}</div>
    </div>
  );
};

export default EventSupporter;
