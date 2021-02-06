import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.nav}>
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      Home
    </NavLink>

    <NavLink to="/projects" className={s.link} activeClassName={s.activeLink}>
      Projects
    </NavLink>

    <a
      href="https://yer-resume.netlify.app/"
      className={s.link}
      target="_blank"
      rel="noreferrer"
    >
      Resume
    </a>
  </nav>
);

export default Navigation;
