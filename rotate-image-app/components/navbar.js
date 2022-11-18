import Link from "next/Link";
import styles from "../styles/Navbar.module.css";
import Logo from "./images/myLogo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Image className={styles.logo} alt="logo" src={Logo} />
      </div>
      <div>
        {" "}
        <Link href="/">Home</Link>
      </div>
      <div>
        {" "}
        <Link href="/about">About</Link>
      </div>
    </div>
  );
};
export default Navbar;
