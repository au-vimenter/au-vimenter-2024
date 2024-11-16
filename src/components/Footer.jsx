import { footerText } from "../constants/text.js";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        padding: "10px",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        width: "100vw",
      }}
    >
      <div>&copy; {footerText}</div>
    </footer>
  );
};

export default Footer;
