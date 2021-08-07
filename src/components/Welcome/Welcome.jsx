import { revealTransitionDown } from '@lib/transitions';
import MockScreen from '../MockScreen/MockScreen';
import Socials from '../Socials/Socials';
import style from './Welcome.module.css';

function Welcome() {


  return (
    <section className={style.heroSection}>
      <div className={style.contentContainer}>
        <div className={style.textContainer}>
          <h3>Welcome! My name is</h3>
          <h1>{`<redacted>`}</h1>
          <h2>I use technology to help people.</h2>
          <p>
            I'm a web developer who loves creating tools to make lives easier,
            actions quicker and experiences better. Right now, I'm passionate
            about how programming can be wielded to solve social issues.
          </p>
        </div>
        <MockScreen />
      </div>
      <div className={style.contact}>
        <a href='mailto:me@chancellor.tech' className={style.contactButton}>
          Say Hi 👋
        </a>
        <div className={style.socials}>
          <p>or check out my socials</p>
          <Socials />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
