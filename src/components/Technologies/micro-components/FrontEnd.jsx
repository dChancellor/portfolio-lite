import style from './FrontEnd.module.css';
import FrontEndStatic from '../assets/FE-BG.png';
import FEMouse from '../assets/FE-Mouse.svg';
import FEButton from '../assets/FE-Button.svg';

function FrontEnd() {
  return (
    <>
      <div className={`${style.icon} ${style.frontEnd}`}>
        <img
          className={style.static}
          src={FrontEndStatic}
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
      <h2>Front-End</h2>
      <p>Javascript, React, Vue, Svelte, ThreeJS</p>
    </>
  );
}

export default FrontEnd;
