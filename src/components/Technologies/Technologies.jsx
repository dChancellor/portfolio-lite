import style from './Technologies.module.css';

function Technologies() {
  return (
    <section className={style.techContainer}>
      <h1>What I Do</h1>
      <div className={style.types}>
        <div className={`${style.typeContainer} ${style.devOps}`}>
          <div className={style.icon}></div>
          <p>Github, Docker, AWS, NGINX </p>
        </div>
        <div className={`${style.typeContainer} ${style.design}`}>
          <div className={style.icon}></div>
          <p>Adobe Creative Suite, 3Ds Max, Figma</p>
        </div>
        <div className={`${style.typeContainer} ${style.frontEnd}`}>
          <div className={style.icon}></div>
          <p>Javascript, React, Vue, Svelte, ThreeJS</p>
        </div>
        <div className={`${style.typeContainer} ${style.backEnd}`}>
          <div className={style.icon}></div>
          <p>NodeJS, Postgres, Mongo, GraphQL</p>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
