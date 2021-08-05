import style from './Technologies.module.css';
import FrontEnd from './micro-components/FrontEnd';
import BackEnd from './micro-components/BackEnd';
import DevOps from './micro-components/DevOps';
import Design from './micro-components/Design';

function Technologies() {
  const zones = [<Design />, <FrontEnd />, <DevOps />, <BackEnd />];
  return (
    <section className={style.techContainer}>
      <h1>What I Do</h1>
      <div className={style.zones}>
        {zones.map((zone, index) => {
          return (
            <div key={index} className={`${style.zone}`}>
              {zone}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Technologies;
