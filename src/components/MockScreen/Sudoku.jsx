import style from "./Sudoku.module.css";

function Sudoku() {
  let subgrid = () =>
    new Array(9).fill(0).map((square, index) => {
      return (
        <div key={index} className={style.sudokuSquare}>
          {Math.random() > 0.6 ? Math.ceil(Math.random() * 9) : null}
        </div>
      );
    });

  let board = new Array(9).fill(0).map((sub, index) => {
    return (
      <div
        key={index}
        style={{
          animationDelay: `${(Math.random() / 4) * index + 3}s`,
        }}
        className={style.subgrid}
      >
        {subgrid()}
      </div>
    );
  });

  return <div className={style.sudoku}>{board}</div>;
}

export default Sudoku;
