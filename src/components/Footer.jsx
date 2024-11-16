import { footerText } from "../constants/text.js";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>&copy; {footerText}</div>
    </footer>
  );
};

export default Footer;
