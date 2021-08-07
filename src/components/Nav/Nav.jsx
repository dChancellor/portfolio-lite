import style from './Nav.module.css';

function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="#About">About</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
        <li>
          <button>Resume</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
