import { FC, useState } from "react";
import styles from "./Navbar.module.css";
import { getImageURL } from "../../utils";

const Navbar: FC = () => {
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
              ? getImageURL("nav/closeIcon.webp")
              : getImageURL("nav/menuIcon.webp")
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
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
