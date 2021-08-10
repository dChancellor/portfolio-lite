import { useRef, useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import { revealTransitionUp } from '@lib/transitions';
import projects from './ProjectLib';
import style from './Projects.module.css';

import React from './assets/icons/React.png';

function Projects() {
  const projectsRef = useRef([]);
  const [randomRepo, setRandomRepo] = useState(null);
  const header = useRef(null);
  const randomProject = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(header.current, revealTransitionUp(1));
    projectsRef.current.forEach((ref, index) =>
      ScrollReveal().reveal(ref, revealTransitionUp(index))
    );
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(randomProject.current, revealTransitionUp(1));
  }, [randomRepo]);

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
      const data = await response.json();
      let { items } = data && data;
      if (items)
        setRandomRepo(items[Math.floor(Math.random() * items?.length)]);
    };
    fetchData();
  }, []);

  return (
    <section id='Projects' className={style.projectsContainer}>
      <h1 ref={header} className={style.header}>
        What I've Made
      </h1>
      <ul className={style.projects}>
        {projects.map((project, index) => (
          <li
            key={project.name}
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
              <div className={style.techContainer}>
                {project.tech.map((tech) => (
                  <div key={tech} className={style.technologyTag}>
                    {tech}
                  </div>
                ))}
              </div>
              <div className={style.links}>
                <a
                  rel='noreferrer noopener'
                  target='_blank'
                  href={project.github_url}>
                  Github
                </a>
                <a
                  rel='noreferrer noopener'
                  target='_blank'
                  href={project.live_url}>
                  Live URL
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {randomRepo && (
        <div ref={randomProject} className={style.randomContainer}>
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
              View on Github
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
