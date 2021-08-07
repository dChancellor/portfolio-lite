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
      <ul id='Projects' className={style.projectsContainer}>
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
              <p>{project.description}</p>
              {/* <div className={style.techContainer}>
                {project.tech.map((tech) => (
                  <div className={style.technologyTag}>{tech}</div>
                ))}
              </div> */}
              {/* <div className={style.links}>
                <a href={project.github_url}>
                  <img src={Github} alt='Repo URL' />
                </a>
                <a href={project.live_url}>
                  <div className={style.liveURLButton}>Live URL</div>
                </a>
              </div> */}
            </div>
          </li>
        ))}
      </ul>
      {randomRepo && (
        <div className={style.randomContainer}>
          <h3>
            And here is a randomized project I pulled from my Github - just for
            you!
          </h3>
          <div className={style.randomProjectContainer}>
            <h2>{randomRepo.name}</h2>
            <p>{randomRepo.description}</p>
            <a
              rel='noreferrer noopener'
              target='_blank'
              href={randomRepo.html_url}>
              Github
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
