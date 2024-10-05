import { FC } from "react";
import styles from "./Hero.module.css";
import { getImageURL } from "../../utils";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tua</h1>
        <p className={styles.description}>
          I'm a Frontend Developer with 2 years of experience using ReactJS and
          TypeScript. Reach out if you would like to learn more.
        </p>

        <a href="mailto:fendersdtua@hotmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <img
        src={getImageURL("hero/my-picture-fotor.png")}
        // src={getImageURL("hero/heroImage.png")}
        alt="Hero Image"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
