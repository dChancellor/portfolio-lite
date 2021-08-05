import style from './DevOps.module.css';
import DevOpsBackground from '../assets/DevOps.png';

function DevOps() {
  return (
    <>
      <div className={`${style.icon} ${style.devOps}`}>
        <img
          className={style.static}
          src={DevOpsBackground}
          alt='Dev Ops Icon'
        />
        <h3 className={style.bash}>
          $<span>_</span>
        </h3>
      </div>
      <h2>Dev-Ops</h2>
      <p>Github, Docker, AWS Lightsail </p>
    </>
  );
}

export default DevOps;
