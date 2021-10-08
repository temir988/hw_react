import { NavLink } from "react-router-dom";

import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import s from "./Home.module.css";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import { ReactComponent as LogoSvg } from "./logo.svg";

function Home() {
  return (
    <div className={s.wrapper}>
      <Header>
        <NavLink to="/" className="link">
          <Logo />
        </NavLink>
        <NavLink to="/setting" className="link">
          <IconButton icon="setting">Settings</IconButton>
        </NavLink>
      </Header>
      <main className={s.main}>
        <div className={s.box}>
          <div className={s.image}>
            <LogoSvg />
          </div>
          <div className={s.description}>
            Configure repository connection and synchronization settings
          </div>
          <NavLink to="/setting" className="link">
            <Button type="action">Open settings</Button>
          </NavLink>
        </div>
      </main>
    </div>
  );
}

export default Home;
