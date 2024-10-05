import { FC, useState } from "react";
import styles from "./Navbar.module.css";
import { getImageURL } from "../../utils";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageURL("nav/closeIcon.png")
              : getImageURL("nav/menuIcon.png")
          }
          onClick={() => setMenuOpen((prev) => !prev)}
          alt="menu-button"
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
