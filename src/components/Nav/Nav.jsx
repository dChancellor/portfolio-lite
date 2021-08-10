// eslint-disable-next-line no-unused-vars
import style from './Nav.module.css';
import Resume from '@lib/Resume - Derek Holtzman.pdf';
function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href='#About'>About</a>
        </li>
        <li>
          <a href='#Projects'>Projects</a>
        </li>
        <li>
          <a href='#Contact'>Contact</a>
        </li>
        <li>
          <a className={style.resume} href={Resume} rel='noreferrer noopener' target='_blank'>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
