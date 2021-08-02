import style from './About.module.css';

function About() {
  return (
    <section className={style.aboutContainer}>
      <h1>About me</h1>
      <p>
        My 'This is awesome!' moment was when I was 8 years old. I developed a
        program which took in user responses to interview questions and at the
        end returned their answers and I. was. hooked.
      </p>
      <br />
      <p>
        While my first program was meant to help people remember their name or
        favorite color, I've started focusing on bigger problems for technology
        to solve.
      </p>
      <br />
      <p>
        I'm a self-taught programmer looking for my first developer position.
        However, I've also had the honor of helping elect a{' '}
        <a href='https://www.obama.org/'>President of the United States</a>,
        working for one of the{' '}
        <a href='https://www.house.gov/'>
          most powerful legislative bodies in the world
        </a>{' '}
        and earning two Bachelor of Arts for Political Science and Sociology
        from <a href='https://www.umkc.edu/'>UMKC</a>.
      </p>
    </section>
  );
}

export default About;
