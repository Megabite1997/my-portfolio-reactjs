import { FC } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard id={id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
