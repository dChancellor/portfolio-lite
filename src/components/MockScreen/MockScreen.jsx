import { useEffect, useState, useMemo } from 'react';
import Chessboard from './screens/Chessboard';
import Sudoku from './screens/Sudoku';
import Notes from './screens/Notes';
import Waves from './screens/Waves';
import style from './MockScreen.module.css';

function MockScreen() {
  const screens = useMemo(() => [Chessboard, Notes, Sudoku, Waves], []);
  const [currentScreen, setScreen] = useState(
    Math.floor(Math.random() * screens.length)
  );
  const active = () => screens[currentScreen]();

  useEffect(() => {
    setTimeout(() => {
      let next = currentScreen === screens.length - 1 ? 0 : currentScreen + 1;
      setScreen(next);
    }, 7000);
  }, [currentScreen, screens]);

  return <div className={style.screen}>{active()}</div>;
}

export default MockScreen;
