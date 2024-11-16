import styles from "../styles/PreviousEvent.module.css";
import { previousEvents, sectionTitle } from "../constants/text.js";

const PreviousEvents = () => {
  return (
    <section className={styles.container}>
      <h2>{sectionTitle.previousEvents}</h2>
      <ul>
        {previousEvents.map((event) => {
          return (
            <li key={event.name} className={styles.link}>
              <a href={event.url} target="_blank">
                <div>{event.name}</div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PreviousEvents;
