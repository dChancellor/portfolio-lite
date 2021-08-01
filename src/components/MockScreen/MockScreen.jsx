import { useEffect, useState, useMemo } from "react";
import Chessboard from "./Chessboard";
import Sudoku from "./Sudoku";
import Notes from "./Notes";
import Waves from "./Waves";
import style from "./MockScreen.module.css";

function MockScreen() {
  const screens = useMemo(() => [Chessboard, Notes, Sudoku, Waves], []);
  const [currentScreen, setScreen] = useState(
    Math.floor(Math.random() * screens.length)
  );
  // const [currentScreen, setScreen] = useState(3);
  const active = () => screens[currentScreen]();

  useEffect(() => {
    setTimeout(() => {
      let next = currentScreen === screens.length - 1 ? 0 : currentScreen + 1;
      setScreen(next);
    }, 7000);
  }, [currentScreen, screens]);

  return (
    <section className={style.container}>
      <div className={style.screen}>{active()}</div>
      <div className={style.screen3D}></div>
    </section>
  );
}

export default MockScreen;
