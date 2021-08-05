import style from './Design.module.css';
import DesignStatic from '../assets/DesignLetter.svg';
import DesignAnimated from '../assets/Design-Ani.png';

function Design() {
  return (
    <>
      <div className={`${style.icon} ${style.design}`}>
        <img
          className={style.animated}
          style={{ animationDelay: `${Math.random() * 4}s` }}
          src={DesignAnimated}
          alt='Design'
        />
        <img
          className={style.static}
          src={DesignStatic}
          alt='Design Logo Animated'
        />
      </div>
      <h2>Design</h2>
      <p>Adobe Creative Suite, 3ds Max, Figma</p>
    </>
  );
}

export default Design;
