import styles from "../styles/EventSupporter.module.css";
import { supporters, sectionTitle } from "../constants/text.js";

const EventSupporter = () => {
  return (
    <section className={styles.container}>
      <h2>{sectionTitle.eventSupporter}</h2>
      {supporters.map((supporter, index) => (
        <div key={index}>{supporter}</div>
      ))}
    </section>
  );
};

export default EventSupporter;
