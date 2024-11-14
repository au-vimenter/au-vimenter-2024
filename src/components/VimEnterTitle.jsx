import styles from "../styles/VimEnterTitle.module.css";

const VimEnterTitle = () => {
  return (
    <h1 className={styles.container}>
      <div>
        <span className={styles.au}>au</span>&nbsp;
        <span className={styles.vimenter}>VimEnter</span>&nbsp;
        <span className={styles.asterisk}>*</span>
      </div>
      <div>
        <span className={styles.call}>call</span>&nbsp;
        <span className={styles.bye2024}>Bye2024()</span>
      </div>
    </h1>
  );
};

export default VimEnterTitle;
