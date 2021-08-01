import Wave1 from "./assets/1.png";
import Wave2 from "./assets/2.png";
import Wave3 from "./assets/3.png";
import Wave4 from "./assets/4.png";

import style from "./Waves.module.css";

const images = [Wave1, Wave2, Wave3, Wave4];
function Waves() {
  let waves = new Array(5).fill(0).map((w, index) => {
    return (
      <img
        alt=""
        src={images[index]}
        key={index}
        style={{
          animationDuration: `${Math.random() * index + 5}s`,
          animationTimingFunction: "ease-in-out",
          animationDelay: `${(Math.random() * index) / 3 + 1}s`,
        }}
        className={`${style.wave} ${style[`wave${index + 1}`]}`}
      ></img>
    );
  });
  return <div className={style.container}>{waves}</div>;
}

export default Waves;
