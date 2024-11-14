import { links } from "../constants/common";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <a href={links.vimKR} target="_blank">
        <img src="/vimkr.png" alt="vim.kr" />
        <span>vim.kr</span>
      </a>
      <a href={links.auVimEnter} target="_blank">
        <img src="/github.png" alt="auVimEnter" />
        <span>auVimEnter</span>
      </a>
    </nav>
  );
};

export default Header;
