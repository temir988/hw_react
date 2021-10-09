import { NavLink } from "react-router-dom";

import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import s from "./Settings.module.css";

function Settings() {
  return (
    <div className="wrapper">
      <Header>
        <NavLink to="/" className="link">
          <Logo />
        </NavLink>
      </Header>
      <main>
        <h1 className={s.title}>Settings</h1>
        <p className={s.description}>
          Configure repository connection and synchronization settings.
        </p>
      </main>
    </div>
  );
}

export default Settings;
