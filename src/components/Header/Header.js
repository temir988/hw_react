import cn from "classnames";
import s from "./Header.module.css";

const headerStyles = cn(s.header);

function Header(props) {
  return <header className={headerStyles}>{props.children}</header>;
}

export default Header;
