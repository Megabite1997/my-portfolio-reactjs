import React, { FC } from "react";
import styles from "./ProjectCard.module.css";
import { getImageURL } from "../../utils";

interface ProjectCardProps {
  id: number;
  project: {
    title: string;
    imageSrc: string;
    description: string;
    skills: string[];
    demo: string;
    source: string;
  };
}

const ProjectCard: FC<ProjectCardProps> = ({ id, project }) => {
  return (
    <div key={id} className={styles.container}>
      <img
        src={getImageURL(project.imageSrc)}
        alt={project.title}
        className={styles.projectImage}
      />

      <div className={styles.projectDetail}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.skills}>
          {project.skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              {skill}
            </div>
          ))}
        </div>

        <div className={styles.links}>
          <a href={project.demo} target="_blank">
            Demo
          </a>
          <a href={project.source} target="_blank">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
