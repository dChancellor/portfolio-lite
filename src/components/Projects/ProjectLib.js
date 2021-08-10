import Voyager from './assets/voyager.gif';
import Bookwise from './assets/Bookwise.png';
import EvalGuessr from './assets/EvalGuessr.png';
import Sudoku from './assets/Sudoku.png';

const projects = [
  {
    name: 'Voyager',
    live_url: 'https://lws.pw',
    github_url: 'https://github.com/dChancellor/voyager',
    description:
      'A URL shortener with OAuth for POST endpoints. Now included with 100% server test coverage.',
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
    preview: Bookwise,
  },
  {
    name: 'EvalGuessr',
    live_url: 'https://evalguessr.chancellor.tech',
    github_url: 'https://github.com/dChancellor/EvalGuessr',
    description:
      'A one weekend only challenge build. It uses the Lichess API and Stockfish to evaluate real games played. Hone your chess evaluation skills and improve your game!',
    tech: ['Github Actions', 'React', 'NodeJS', 'AWS Lightsail', 'Docker'],
    preview: EvalGuessr,
  },
  {
    name: 'Sudoku Solver',
    live_url: 'https://sudoku.chancellor.tech',
    github_url: 'https://github.com/dChancellor/sudoku-solver',
    description:
      'Scrapes the NYT and uses a backtracking algorithm to solve the NYT Daily Sudoku Puzzles.',
    tech: ['Javascript', 'NodeJS', 'AWS Lightsail', 'Docker'],
    preview: Sudoku,
  },
];

export default projects;
