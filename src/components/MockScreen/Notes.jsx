import style from './Notes.module.css';

const noteColors = ['#878259', '#6a7a4e', '#785680', '#586d72', '#916379'];

function Notes() {
  return (
    <div className={style.bookwise}>
      <div className={style.books}>{createBookList()}</div>
      <div className={style.chapters}>{createChapterList()}</div>
    </div>
  );
}

export default Notes;

let createBookList = () => {
  let isPinned = Math.ceil(Math.random() * 5);
  return new Array(isPinned + 2 + Math.ceil(Math.random() * 2))
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        style={{
          animationDuration: `${(Math.random() * index) / 36 + 2}s`,
          animationTimingFunction: 'ease-in-out',
          animationDelay: `${(Math.random() * index + 4) / 8 + 3}s`,
        }}
        className={`${index < isPinned && style.pinned} ${
          index === isPinned && style.active
        } ${style.book}`}
      />
    ));
};

let createChapterList = () =>
  new Array(Math.ceil(Math.random() * 3)).fill(0).map((_, index) => {
    return (
      <section key={index}>
        <div
          className={style.chapter}
          style={{
            animationDuration: `${(Math.random() * index) / 36 + 2}s`,
            animationTimingFunction: 'ease-in-out',
            animationDelay: `${(Math.random() * index + 8) / 3 + 1}s`,
          }}></div>
        {note}
      </section>
    );
  });

let note = new Array(Math.ceil(Math.random() * 2)).fill(0).map((_, index) => {
  return (
    <div
      style={{
        backgroundColor: noteColors[Math.ceil(Math.random() * 4)],
        animationDuration: `${(Math.random() * index) / 36 + 2}s`,
        animationTimingFunction: 'ease-in-out',
        animationDelay: `${(Math.random() * index + 8) / 3 + 1}s`,
      }}
      className={style.note}
      key={index}></div>
  );
});
