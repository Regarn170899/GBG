import styles from "../Sector2/Sector2.module.css";
import { v4 as uuidv4 } from "uuid";
import rec1 from "../../accets/rec1.svg";
import rec2 from "../../accets/rec2.svg";
import rec3 from "../../accets/rec3.svg";
import rec4 from "../../accets/rec4.svg";
import rec5 from "../../accets/rec5.svg";
import rec6 from "../../accets/rec6.svg";

import React from "react";

const Projects = () => {
  const projects = [
    { src: rec1, id: uuidv4(), alt: "Проект 1" },
    { src: rec2, id: uuidv4(), alt: "Проект 2" },
    { src: rec3, id: uuidv4(), alt: "Проект 3" },
    { src: rec4, id: uuidv4(), alt: "Проект 4" },
    { src: rec5, id: uuidv4(), alt: "Проект 5" },
    { src: rec6, id: uuidv4(), alt: "Проект 6" },
  ];
  return (
    <div className={styles.ourProjects}>
      {projects.map((project) => (
        <img
          className={styles.project}
          key={project.id}
          src={project.src}
          alt={project.alt}
        />
      ))}
    </div>
  );
};
export default Projects;
