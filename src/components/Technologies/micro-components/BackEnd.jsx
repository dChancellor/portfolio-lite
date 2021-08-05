import style from './BackEnd.module.css';
import Servers from '../assets/BE-Servers.png';

function BackEnd() {
  return (
    <>
      <div className={`${style.icon} ${style.backEnd}`}>
        <img className={style.static} src={Servers} alt='BackEnd icon' />
        <div className={`${style.light} ${style.topleft}`}></div>
        <div className={`${style.light} ${style.topright}`}></div>
        <div className={`${style.light} ${style.bottomleft}`}></div>
        <div className={`${style.light} ${style.bottomright}`}></div>
      </div>
      <h2>Back-End</h2>
      <p>NodeJS, Postgres, Mongo, GraphQL</p>
    </>
  );
}

export default BackEnd;
