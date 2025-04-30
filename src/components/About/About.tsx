import { FC } from "react";
import styles from "./About.module.css";
import { getImageURL } from "../../utils";

const About: FC = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageURL("hero/me_cartoon.webp")}
          alt="About Image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/cursorIcon.webp")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>
                I am a Full Stack Developer with over 3 years experience. I have
                a strong background in web development, specializing in both
                frontend and backend technologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/serverIcon.webp")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <p>
                I am passionate about creating efficient and user-friendly
                applications that solve real-world problems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
