import { NavLink } from "react-router-dom";
import NumberFormat from "react-number-format";

import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import s from "./Settings.module.css";

function Settings() {
  return (
    <div className="wrapper">
      <Header>
        <NavLink to="/" className="link">
          <Logo />
        </NavLink>
      </Header>
      <main className={s.main}>
        <h1 className={s.title}>Settings</h1>
        <p className={s.description}>
          Configure repository connection and synchronization settings.
        </p>
        <form className={s.form}>
          <TextField
            label="GitHub repository"
            placeholder="user-name/repo-name"
            required
          />
          <TextField
            label="Build command"
            placeholder="user-name/repo-name"
            required
          />
          <TextField label="Main branch" placeholder="user-name/repo-name" />
          <div className={s.sync}>
            Synchronize every
            <NumberFormat value={10} className={s.inputNumber} />
            minutes
          </div>
          <div className={s.actions}>
            <Button type="action">Save</Button>
            <Button type="secondary">Cancel</Button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Settings;
