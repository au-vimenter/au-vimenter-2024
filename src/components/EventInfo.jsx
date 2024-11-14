import { isDesktop } from "../constants/common";
import CalendarIcon from "./CalendarIcon";
import LocationIcon from "./LocationIcon";
import styles from "../styles/EventInfo.module.css";

const EventInfo = () => {
  const size = isDesktop ? 24 : 16;
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <CalendarIcon size={size} /> <span>2024/12/21 15:00 ~ 18:00</span>
      </div>
      <div className={styles.item}>
        <LocationIcon size={size} />{" "}
        <span>서울 서초구 강남대로 343 8층 리턴제로</span>
      </div>
    </div>
  );
};

export default EventInfo;
