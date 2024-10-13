import { FC } from "react";
import styles from "./About.module.css";
import { getImageURL } from "../../utils";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageURL("about/aboutImage.png")}
          alt="About Image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I'm a Frontend Developer with 2 years experience</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I'm a Backend Developer with 1 year experience</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
