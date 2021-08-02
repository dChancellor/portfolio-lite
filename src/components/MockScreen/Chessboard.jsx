import style from "./Chessboard.module.css";

function Chessboard() {
  const board = new Array(64).fill(0).map((_, index) => {
    return (
      <div
        key={index}
        style={{
          animationDelay: `${(Math.random() * index) / 32 + 4}s`,
        }}
        className={style.square}
      />
    );
  });

  return <div className={style.chessboard}>{board}</div>;
}

export default Chessboard;
