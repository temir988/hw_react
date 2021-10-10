import s from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <ul className={s.list}>
          <li>
            <NavLink to="/" className={s.link}>
              Support
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={s.link}>
              Learning
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={s.link}>
              Русская версия
            </NavLink>
          </li>
        </ul>

        <div className={s.copyright}>© 2020 Your Name</div>
      </div>
    </footer>
  );
}

export default Footer;
