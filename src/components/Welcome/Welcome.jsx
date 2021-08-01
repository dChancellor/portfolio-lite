import MockScreen from "../MockScreen/MockScreen";
import style from "./Welcome.module.css";

function Welcome() {
  return (
    <section className={style.heroSection}>
      <div className={style.contentContainer}>
        <div className={style.textContainer}>
          <h3>Hi, my name is</h3>
          <h1>Derek Chancellor.</h1>
          <h2>I build things for the web.</h2>
          <p>
            I'm a developer who loves creating tools to make lives easier,
            actions quicker and experiences better. I'm currently focused on how
            programming can be wielded to solve social issues.
          </p>
          <a href="mailto:me@chancellor.tech" className={style.contactButton}>
            Say Hi 👋
          </a>
        </div>
        <MockScreen />
      </div>
    </section>
  );
}

export default Welcome;
