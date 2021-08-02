import { useState, useEffect } from 'react';
import style from './App.module.css';
import Nav from './components/Nav/Nav';
import Welcome from './components/Welcome/Welcome';
import ThemeButton from './components/ThemeButton/ThemeButton';
import About from './components/About/About';
import Technologies from './components/Technologies/Technologies';

function App() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    setLoading(false);
    // }, 2000);
  }, []);

  return (
    <main>
      <div
        className={`${!loading && style.loaded} ${style.themeButtonContainer}`}>
        <ThemeButton loading={loading} scale={'1'} />
      </div>
      {!loading && (
        <>
          <Nav />
          <Welcome />
          <div className={style.meContainer}>
            <About />
            <Technologies />
          </div>
          <div className={style.tempFooter}>Insert Footer Here</div>
        </>
      )}
    </main>
  );
}

export default App;
