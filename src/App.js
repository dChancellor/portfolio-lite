import { useState, useEffect } from "react";
import style from "./App.module.css";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import ThemeButton from "./components/ThemeButton/ThemeButton";
import About from "./components/About/About";

function App() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    setLoading(false);
    // }, 2000);
  }, []);

  return (
    <main>
      <div className={`${!loading && style.loaded} ${style.themeButton}`}>
        <ThemeButton loading={loading} scale={"1"} />
      </div>
      {!loading && (
        <>
          <Header />
          <Welcome />
          <About />
        </>
      )}
    </main>
  );
}

export default App;
