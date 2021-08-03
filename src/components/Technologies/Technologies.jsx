import style from './Technologies.module.css';
import Design from './assets/DesignLetter.svg';
import DesignAni from './assets/Design-Ani.png';
import FrontEndBG from './assets/FE-BG.png';
import FEMouse from './assets/FE-Mouse.svg';
import FEButton from './assets/FE-Button.svg';

function Technologies() {
  return (
    <section className={style.techContainer}>
      <h1>What I Do</h1>
      <div className={style.types}>
        <div className={`${style.typeContainer}`}>
          <div className={`${style.icon} ${style.design}`}>
            <img
              className={style.animated}
              style={{ animationDelay: `${Math.random() * 7}s` }}
              src={DesignAni}
              alt='Design'
            />
            <img
              className={style.static}
              src={Design}
              alt='Design Logo Animated'
            />
          </div>
          <p>Adobe Creative Suite, 3Ds Max, Figma</p>
        </div>
        <div className={`${style.typeContainer}`}>
          <div className={`${style.icon} ${style.frontEnd}`}>
            <img
              className={style.static}
              src={FrontEndBG}
              alt='Front End Icon'
            />
            <img
              className={`${style.animated} ${style.FEButton}`}
              src={FEButton}
              alt='Front End Button Icon'
            />
            <img
              className={`${style.animated} ${style.FEMouse}`}
              src={FEMouse}
              alt='Front End Mouse Icon'
            />
          </div>
          <p>Javascript, React, Vue, Svelte, ThreeJS</p>
        </div>
        <div className={`${style.typeContainer}`}>
          <div className={`${style.icon} ${style.devOps}`}></div>
          <p>Github, Docker, AWS, NGINX </p>
        </div>
        <div className={`${style.typeContainer}`}>
          <div className={`${style.icon} ${style.backEnd}`}></div>
          <p>NodeJS, Postgres, Mongo, GraphQL</p>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
