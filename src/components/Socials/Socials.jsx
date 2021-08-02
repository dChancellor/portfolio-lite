import style from './Socials.module.css';
import Github from './assets/github.png';
import LinkedIn from './assets/LI-In-Bug.png';

function Socials() {
  return (
    <div className={style.container}>
      <a href='https://github.com/dChancellor'>
        <img className={style.icon} src={Github} alt='Github' />
      </a>
      <a href='https://www.linkedin.com/in/derekholtzman/'>
        <img className={style.icon} src={LinkedIn} alt='LinkedIn' />
      </a>
    </div>
  );
}

export default Socials;
