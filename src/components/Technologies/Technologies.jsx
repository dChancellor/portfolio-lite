import style from './Technologies.module.css';

function Technologies() {
  return (
    <div>
        <h1>What I Do</h1>
      <div className='devOps'>
        <p>Github, Docker, AWS, NGINX </p>
      </div>
      <div className='design'>
        <p>Adobe Creative Suite, 3Ds Max, Figma</p>
      </div>
      <div className='frontend'>
        <p>Javascript, React, Vue, Svelte, ThreeJS</p>
      </div>
      <div className='backend'>
        <p>NodeJS, Postgres, Mongo, GraphQL</p>
      </div>
    </div>
  );
}

export default Technologies;
