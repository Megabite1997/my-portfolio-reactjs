import { FC } from "react";
import styles from "./Experience.module.css";

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageURL } from "../../utils";

const Experience: FC = () => {
  return (
    <section className={styles.container}>
      <div id="skills" className={styles.skillsContainer}>
        <h2 className={styles.title}>Skills</h2>

        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageURL(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="experience" className={styles.historyContainer}>
        <h2 className={styles.title}>Experiences</h2>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageURL(historyItem.imageSrc)}
                alt={`${historyItem.organization} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>
                  {historyItem.role}, {historyItem.organization}
                </h3>
                <p>{`(${historyItem.startDate} - ${historyItem.endDate})`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id} className={styles.experienceItem}>
                      {experience}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
