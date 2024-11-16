import styles from "../styles/EventSupporter.module.css";
import { supporters, sectionTitle } from "../constants/text.js";

const EventSupporter = () => {
  return (
    <section className={styles.container}>
      <h2>{sectionTitle.eventSupporter}</h2>
      <div>{supporters[0]}</div>
      <div>{supporters[1]}</div>
    </section>
  );
};

export default EventSupporter;
