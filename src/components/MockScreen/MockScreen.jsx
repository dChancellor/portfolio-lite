import { useEffect, useState } from "react";
import style from "./MockScreen.module.css";

function MockScreen() {
  const [currentScreen, setScreen] = useState(1);

  const screens = [chessBoard, notes];
  const active = () => screens[currentScreen]();

  useEffect(() => {
    // setTimeout(() => {
    //   let next = currentScreen === screens.length - 1 ? 0 : currentScreen + 1;
    //   setScreen(next);
    // }, 7000);
  }, [currentScreen, screens]);

  return (
    <section className={style.container}>
      <div className={style.screen}>{active()}</div>
      <div className={style.screen3D}></div>
    </section>
  );
}

export default MockScreen;

function chessBoard() {
  const board = new Array(64).fill(0).map((square, index) => {
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

function notes() {
  let pinned = Math.ceil(Math.random() * 5);
  let books = new Array(pinned + 2 + Math.ceil(Math.random() * 2))
    .fill(0)
    .map((book, index) => (
      <div
        key={index}
        style={{
        //   animationName: "moveLeft",
          animationDuration: ".3s",
          animationTimingFunction: "linear",
          animationDelay: `${(Math.random() * index) / 4 + 4}s`,
        }}
        className={`${index < pinned && style.pinned} ${
          index === pinned && style.active
        } ${style.book}`}
      />
    ));
  console.log(books.length);
  return (
    <div className={style.notes}>
      <div className={style.books}>{books}</div>
    </div>
  );
}
