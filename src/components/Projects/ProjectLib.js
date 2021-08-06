import GithubActions from './assets/icons/GithubActions.png';
import Javascript from './assets/icons/Javascript.png';
import Svelte from './assets/icons/Svelte.png';
import NodeJS from './assets/icons/NodeJS.png';
import AWS from './assets/icons/AWS.png';
import Docker from './assets/icons/Docker.png';
import Mongo from './assets/icons/Mongo.png';
import React from './assets/icons/React.png';

import Voyager from './assets/voyager.gif';
// import EvalGuessr from './assets/EvalGuessr.png';
// import Sudoku from './assets/Sudoku.png';

const projects = [
  {
    name: 'Voyager',
    live_url: 'https://lws.pw',
    github_url: 'https://github.com/dChancellor/voyager',
    description:
      'A URL shortener with OAuth for POST endpoints. Now included with 100% server test coverage.',
    icons: [GithubActions, Javascript, Svelte, NodeJS, AWS, Docker, Mongo],
    tech: [
      'Github Actions',
      'Javascript',
      'Svelte',
      'NodeJS',
      'AWS Lightsail',
      'Docker',
      'MongoDB',
    ],
    preview: Voyager,
  },
  {
    name: 'Bookwise',
    live_url: 'https://bookwise.chancellor.tech',
    github_url: 'https://github.com/dChancellor/notes',
    description:
      'A book note-taking application. Uses Samwise, my GraphQL NodeJS backend personal assistant.',
    tech: ['Svelte', 'GraphQL', 'NodeJS'],
    preview: Voyager,
  },
  {
    name: 'EvalGuessr',
    live_url: 'https://evalguessr.chancellor.tech',
    github_url: 'https://github.com/dChancellor/EvalGuessr',
    description:
      'A one weekend only challenge build. It uses the Lichess API and Stockfish to evaluate real games played. Hone your chess evaluation skills and improve your game!',
    tech: ['Github Actions', 'React', 'NodeJS', 'AWS Lightsail', 'Docker'],
    preview: Voyager,
  },
  {
    name: 'Sudoku Solver',
    live_url: 'https://sudoku.chancellor.tech',
    github_url: 'https://github.com/dChancellor/sudoku-solver',
    description:
      'Scrapes the NYT and uses a backtracking algorithm to solve the NYT Daily Sudoku Puzzles.',
    tech: ['Javascript', 'NodeJS', 'AWS Lightsail', 'Docker'],
    preview: Voyager,
  },
];

export default projects;
