import projects from './ProjectLib';
import style from './Projects.module.css';

import React from './assets/icons/React.png';
import Github from './assets/icons/Github.png';

function Projects() {
  return (
    <ul className={style.projectsContainer}>
      <h1>What I've Made</h1>
      {projects.map((project) => (
        <li className={style.project}>
          <img className={style.preview} src={project.preview} alt='Preview' />
          <div className={style.content}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className={style.icons}>
              {project.icons.map((icon) => (
                <img src={icon} alt={`${icon}`} />
              ))}
            </div>
            {/* <a href={project.github_url}>
            <img src={Github} alt='Repo URL' />
          </a>
          <a href={project.live_url}>
            <div className={style.liveURLButton}>Live URL</div>
          </a> */}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Projects;
