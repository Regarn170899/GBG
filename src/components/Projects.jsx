import s from "./Sector2.module.css";
import { v4 as uuidv4 } from 'uuid';

import React from 'react';

const Projects = () => {

    const projects= [
        {src: "/img/rec1.svg", id:uuidv4(), alt:"Проект 1"},
        {src: "/img/rec2.svg", id:uuidv4(), alt:"Проект 2"},
        {src: "/img/rec3.svg", id:uuidv4(), alt:"Проект 3"},
        {src: "/img/rec4.svg", id:uuidv4(), alt:"Проект 4"},
        {src: "/img/rec5.svg", id:uuidv4(), alt:"Проект 5"},
        {src: "/img/rec6.svg", id:uuidv4(), alt:"Проект 6"},
        ]
    return (
        <div>
            {projects.map((project) => <img className={s.project} key={project.id} src={project.src} alt={project.alt}/>)}
        </div>
    );
};
export default Projects;
