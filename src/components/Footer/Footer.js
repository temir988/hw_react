import s from "./Footer.module.css";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <ul className={s.list}>
          <li>Support</li>
          <li>Learning</li>
          <li>Русская версия</li>
        </ul>

        <div className={s.copyright}>© 2020 Your Name</div>
      </div>
    </footer>
  );
}

export default Footer;
