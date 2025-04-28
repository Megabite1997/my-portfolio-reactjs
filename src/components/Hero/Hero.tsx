import { FC } from "react";
import styles from "./Hero.module.css";
import { getImageURL } from "../../utils";

const Hero: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tua</h1>
        <p className={styles.description}>
          I am a Full Stack Developer with 3 years of experience in web
          development, specializing in both frontend and backend technologies.
        </p>

        <a href="mailto:fendersdtua@hotmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
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
