import { useRef, useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import { revealTransitionUp } from '@lib/transitions';
import projects from './ProjectLib';
import style from './Projects.module.css';

import React from './assets/icons/React.png';
import Github from './assets/icons/Github.png';

function Projects() {
  const projectsRef = useRef([]);
  const [randomRepo, setRandomRepo] = useState(null);

  useEffect(() => {
    projectsRef.current.forEach((ref, index) =>
      ScrollReveal().reveal(ref, revealTransitionUp(index))
    );
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=surprise%20in:topics%20user:dChancellor%20user:shopkeepjs`,
        {
          headers: {
            Accept: 'application/vnd.github.mercy-preview+json',
          },
        }
      );
      const { items } = await response.json();
      setRandomRepo(items[Math.floor(Math.random() * items.length)]);
    };
    fetchData();
  }, []);

  return (
    <>
      <ul className={style.projectsContainer}>
        <h1>What I've Made</h1>
        {projects.map((project, index) => (
          <li
            ref={(element) => (projectsRef.current[index] = element)}
            className={style.project}>
            <img
              className={style.preview}
              src={project.preview}
              alt='Preview'
            />
            <div className={style.content}>
              <h2>{project.name}</h2>
              <p>
                {project.description}
                <div className={style.techContainer}>
                  {project.tech.map((tech) => (
                    <div className={style.technologyTag}>{tech}</div>
                  ))}
                </div>
              </p>
              <div className={style.links}>
                <a href={project.github_url}>
                  <img src={Github} alt='Repo URL' />
                </a>
                <a href={project.live_url}>
                  <div className={style.liveURLButton}>Live URL</div>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {randomRepo && <div>{randomRepo.git_url}</div>}
    </>
  );
}

export default Projects;
