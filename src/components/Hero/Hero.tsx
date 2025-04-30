import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "./Hero.module.css";
import { getImageURL } from "../../utils";

const Hero: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tua</h1>
        <p className={styles.description}>
          I am a Full Stack Developer, specializing in both Frontend and Backend
          technologies.
        </p>

        <div className={styles.contactsContainer}>
          <a
            href="mailto:fendersdtua@hotmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>

          <a
            href="https://www.linkedin.com/in/tada-chaipanya-47b849214/"
            className={styles.socialBtn}
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>

          <a
            href="https://github.com/Megabite1997"
            className={styles.socialBtn}
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>
        </div>
      </div>

      <img
        src={getImageURL("hero/my-picture-fotor.webp")}
        alt="Hero Image"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
