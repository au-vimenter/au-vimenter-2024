import styles from "../styles/EventDescription.module.css";
import { descriptionText } from "../constants/text.js";

const EventDescription = () => {
  return (
    <div className={styles.text}>
      {descriptionText[0]}
      <br />
      {descriptionText[1]}
      <div className={styles.break}></div>
      {descriptionText[2]}
      <div className={styles.break}></div>
      {descriptionText[3]}
      <br />
      {descriptionText[4]}
    </div>
  );
};

export default EventDescription;
