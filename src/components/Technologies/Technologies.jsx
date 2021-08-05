import { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import style from './Technologies.module.css';
import FrontEnd from './micro-components/FrontEnd';
import BackEnd from './micro-components/BackEnd';
import DevOps from './micro-components/DevOps';
import Design from './micro-components/Design';

function Technologies() {
  const zones = [<Design />, <FrontEnd />, <DevOps />, <BackEnd />];
  const transitionTargets = useRef([]);

  const slideUp = {
    distance: '30%',
    origin: 'bottom',
    opacity: 0,
  };

  useEffect(() => {
    // ScrollReveal.reveal('test')
    transitionTargets.current.forEach((ref, index) =>
      ScrollReveal().reveal(ref, slideUp)
    );
  }, []);

  return (
    <section className={style.techContainer}>
      <h1>What I Do</h1>
      <div className={style.zones}>
        {zones.map((zone, index) => {
          return (
            <div
              key={index}
              ref={(element) => (transitionTargets.current[index] = element)}
              // ref={(element) => console.log(element)}
              className={`${style.zone}`}>
              {zone}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Technologies;
