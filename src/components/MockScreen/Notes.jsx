import style from "./Notes.module.css";

const noteColors = ["#878259", "#6a7a4e", "#785680", "#586d72", "#916379"];

function Notes() {
  let note = new Array(Math.ceil(Math.random() * 2)).fill(0).map((n, index) => {
    return (
      <div
        style={{
          backgroundColor: noteColors[Math.ceil(Math.random() * 4)],
          animationDuration: `${(Math.random() * index) / 36 + 2}s`,
          animationTimingFunction: "ease-in-out",
          animationDelay: `${(Math.random() * index + 8) / 3 + 1}s`,
        }}
        className={style.note}
        key={index}
      ></div>
    );
  });
  let notes = () =>
    new Array(Math.ceil(Math.random() * 3)).fill(0).map((a, index) => {
      return (
        <section key={index}>
          <div
            className={style.chapter}
            style={{
              animationDuration: `${(Math.random() * index) / 36 + 2}s`,
              animationTimingFunction: "ease-in-out",
              animationDelay: `${(Math.random() * index + 8) / 3 + 1}s`,
            }}
          ></div>
          {note}
        </section>
      );
    });
  return (
    <div className={style.notes}>
      <div className={style.books}>{books()}</div>
      <div className={style.chapters}>{notes()}</div>
    </div>
  );
}

export default Notes;

let books = () => {
  let pinned = Math.ceil(Math.random() * 5);
  return new Array(pinned + 2 + Math.ceil(Math.random() * 2))
    .fill(0)
    .map((book, index) => (
      <div
        key={index}
        style={{
          animationDuration: `${(Math.random() * index) / 36 + 2}s`,
          animationTimingFunction: "ease-in-out",
          animationDelay: `${(Math.random() * index + 4) / 8 + 3}s`,
        }}
        className={`${index < pinned && style.pinned} ${
          index === pinned && style.active
        } ${style.book}`}
      />
    ));
};
