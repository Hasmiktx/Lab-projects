import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Logo from "./images/myLogo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image className={styles.img} alt="logo" src={Logo} />
      <h2>Rotate Image APP</h2>
    </footer>
  );
};
export default Footer;
