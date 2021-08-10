import SmoothScroll from 'smooth-scroll';
import style from './App.module.css';
import Nav from './components/Nav/Nav';
import Welcome from './components/Welcome/Welcome';
import ThemeButton from './components/ThemeButton/ThemeButton';
import About from './components/About/About';
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  // eslint-disable-next-line no-unused-vars
  var scroll = new SmoothScroll('a[href*="#"]');

  return (
    <main>
      <>
        <Nav />
        <Welcome />
        <section className={style.content}>
          <div className={style.meContainer}>
            <About />
            <Technologies />
          </div>
          <Projects />
          <Contact />
          <Footer />
        </section>
      </>
      <div className={`${style.loaded} ${style.themeButtonContainer}`}>
        <ThemeButton scale={'.6'} />
      </div>
    </main>
  );
}

export default App;
