import style from "./Header.module.css";

function Header() {
  return (
    <nav>
      <div className={style.logo}>D</div>
      <ul>
        <li className={style.menuItem}>
          <span>01.</span>About
        </li>
        <li className={style.menuItem}>
          <span>02.</span>Projects
        </li>
        <li className={style.menuItem}>
          <span>03.</span>Contact
        </li>
        <li className={style.resume}>Resume</li>
      </ul>
    </nav>
  );
}

export default Header;
