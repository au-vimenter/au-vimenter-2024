import { isDesktop } from "../constants/common";
import CalendarIcon from "./CalendarIcon";
import LocationIcon from "./LocationIcon";
import styles from "../styles/EventInfo.module.css";
import {
  eventDateTime,
  eventPlace,
  eventPlaceMapUrl,
} from "../constants/text.js";

const EventInfo = () => {
  const size = isDesktop ? 24 : 16;
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <CalendarIcon size={size} />
        <span>{eventDateTime}</span>
      </div>
      <div className={styles.item}>
        <LocationIcon size={size} />
        <a href={eventPlaceMapUrl} target="_blank">
          <span>{eventPlace}</span>
        </a>
      </div>
    </div>
  );
};

export default EventInfo;
