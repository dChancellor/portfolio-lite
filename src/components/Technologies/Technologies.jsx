import { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import {revealTransitionUp} from '@lib/transitions';
import style from './Technologies.module.css';
import FrontEnd from './micro-components/FrontEnd';
import BackEnd from './micro-components/BackEnd';
import DevOps from './micro-components/DevOps';
import Design from './micro-components/Design';

function Technologies() {
  const zones = [<Design />, <FrontEnd />, <DevOps />, <BackEnd />];
  const transitionTargets = useRef([]);
  const header = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(header.current, revealTransitionUp(1));
    transitionTargets.current.forEach((ref, index) =>
      ScrollReveal().reveal(ref, revealTransitionUp(index))
    );
  }, []);

  return (
    <section className={style.techContainer}>
      <h1 ref={header}>How I Do It</h1>
      <div className={style.zones}>
        {zones.map((zone, index) => {
          return (
            <div
              key={index}
              ref={(element) => (transitionTargets.current[index] = element)}
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
