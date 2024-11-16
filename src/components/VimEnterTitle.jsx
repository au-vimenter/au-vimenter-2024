import styles from "../styles/VimEnterTitle.module.css";
import { titleText } from "../constants/text.js";

const VimEnterTitle = () => {
  return (
    <h1 className={styles.container}>
      <div>
        <span className={styles.au}>{titleText.au}</span>&nbsp;
        <span className={styles.vimenter}>{titleText.vimenter}</span>&nbsp;
        <span className={styles.asterisk}>{titleText.asterisk}</span>
      </div>
      <div>
        <span className={styles.call}>{titleText.call}</span>&nbsp;
        <span className={styles.bye}>{titleText.bye}</span>
      </div>
    </h1>
  );
};

export default VimEnterTitle;
