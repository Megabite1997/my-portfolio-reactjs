import { FC } from "react";
import styles from "./Footer.module.css";
import { getImageURL } from "../../utils";

const Footer: FC = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageURL("contact/emailIcon.webp")} alt="Email icon" />
          <a href="mailto:fendersdtua@hotmail.com">fendersdtua@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageURL("contact/linkedinIcon.webp")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/tada-chaipanya-47b849214/">
            linkedin.com/tada-chaipanya
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageURL("contact/githubIcon.webp")} alt="Github icon" />
          <a href="https://www.github.com/Megabite1997">
            github.com/Megabite1997
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
