import { useEffect, useState } from "react";
import style from "./Parallax.module.css";
import Div from "./assets/Div.png";
import Section from "./assets/Section.png";
import Image from "./assets/Image.png";

function ParallaxBG() {
  let [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    console.log(scroll);
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  });

  return (
    <div className={style.parallaxContainer}>
      <img
        style={{ transform: `translate(0, -${scroll / 2}px)` }}
        className={`${style.bgItem} ${style.div}`}
        src={Div}
        alt=""
      />
      <img
        style={{ transform: `translate(0, -${scroll / 6}px)` }}
        className={`${style.bgItem} ${style.section}`}
        src={Section}
        alt=""
      />
      <img
        style={{ transform: `translate(0, -${scroll / 3}px)` }}
        className={`${style.bgItem} ${style.div2}`}
        src={Section}
        alt=""
      />
      <img
        style={{ transform: `translate(0, -${scroll / 1}px)` }}
        className={`${style.bgItem} ${style.image}`}
        src={Image}
        alt=""
      />
    </div>
  );
}

export default ParallaxBG;
