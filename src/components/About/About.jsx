import { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import {revealTransitionUp} from '@lib/transitions';
import style from './About.module.css';

function About() {
  const transitionTargets = useRef([]);
  const header = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(header.current, revealTransitionUp(1));
    transitionTargets.current.forEach((ref, index) =>
      ScrollReveal().reveal(ref, revealTransitionUp(index))
    );
  }, []);

  return (
    <section className={style.aboutContainer}>
      <h1 ref={header}>Who I am</h1>
      <p ref={(element) => (transitionTargets.current[0] = element)}>
        My 'This is awesome!' moment was when I was 8 years old. I developed a
        program which took user responses to interview questions and returned
        their answers at the end and I. was. hooked.
      </p>
      <br />
      <p ref={(element) => (transitionTargets.current[1] = element)}>
        While my first program was meant to help people remember their name or
        favorite color, I've started focusing on bigger problems for technology
        to solve.
      </p>
      <br />
      <p ref={(element) => (transitionTargets.current[2] = element)}>
        I'm a self-taught programmer who has also had the honor of helping elect
        a <a href='https://www.obama.org/'>President of the United States</a>,
        working for one of the{' '}
        <a href='https://www.house.gov/'>
          most powerful legislative bodies in the world
        </a>{' '}
        and earning two Bachelors of Art for Political Science and Sociology
        from <a href='https://www.umkc.edu/'>UMKC</a>.
      </p>
    </section>
  );
}

export default About;
