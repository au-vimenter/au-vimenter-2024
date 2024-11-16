import { links } from "../constants/text.js";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      {links.map((link) => {
        return (
          <a key={link.url} href={link.url} target="_blank">
            <img src={link.imgSrc} alt={link.url} />
            <span>{link.name}</span>
          </a>
        );
      })}
    </nav>
  );
};

export default Header;
