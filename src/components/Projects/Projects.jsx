import style from './Projects.module.css';
import Github from './assets/icons/Github.png';
import Voyager from './assets/voyager.gif';
import GithubActions from './assets/icons/GithubActions.png';
import Javascript from './assets/icons/Javascript.png';
import Svelte from './assets/icons/Svelte.png';
import NodeJS from './assets/icons/NodeJS.png';
import AWS from './assets/icons/AWS.png';
import Docker from './assets/icons/Docker.png';
import Mongo from './assets/icons/Mongo.png';
import React from './assets/icons/React.png';
import EvalGuessr from './assets/EvalGuessr.png';
import Sudoku from './assets/Sudoku.png';

function Projects() {
  return (
    <section className={style.projectContainer}>
      <h1>What I've Made</h1>
      {projects.map((project) => (
        <section className={style.project}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          {project.icons.map((icon) => (
            <img src={icon} alt={icon} className={style.projectIcon} />
          ))}
          <a href={project.github_url}>
            <img src={Github} alt='Repo URL' />
          </a>
          <a href={project.live_url}>
            <div className={style.liveURLButton}>Live URL</div>
          </a>
        </section>
      ))}
      [
    </section>
  );
}

export default Projects;

const projects = [
  {
    name: 'Voyager',
    live_url: 'https://lws.pw',
    github_url: 'https://github.com/dChancellor/voyager',
    description:
      'A simple url shortener application with a Svelte and p5 front-end that you can stare at for hours. Now included 100% test coverage with 100% test passing for all server functions. The POST endpoints are protected by Google OAuth, but anyone can access already created slugs. ',
    icons: [GithubActions, Javascript, Svelte, NodeJS, AWS, Docker, Mongo],
    preview: Voyager,
  },
  {
    name: 'EvalGuessr',
    live_url: 'https://evalguessr.chancellor.tech',
    github_url: 'https://github.com/dChancellor/EvalGuessr',
    description:
      'A one weekend only challenge build I participated in. It uses the Lichess API and Stockfish to evaluate real games at a random move and the user tries determining what the evaluation is as quickly as possible. This has even improved my chess skills!',
    icons: [GithubActions, React, NodeJS, AWS, Docker],
    preview: EvalGuessr,
  },
  {
    name: 'Bookwise',
    live_url: 'https://bookwise.chancellor.tech',
    github_url: 'https://github.com/dChancellor/notes',
    description:
      'A note taking application to use alongside reading books. Allows you to make',
    icons: [Svelte],
    preview: Voyager,
  },
  {
    name: 'Sudoku Solver',
    live_url: 'https://sudoku.chancellor.tech',
    github_url: 'https://github.com/dChancellor/sudoku-solver',
    description:
      'A real world example of using a backtracking algorithm to solve the NYT Daily Sudoku Puzzle. Scrapes the NYT for the 3 daily puzzles and then solves it.',
    icons: [Javascript, NodeJS, AWS, Docker, GithubActions],
    preview: Sudoku,
  },
];
