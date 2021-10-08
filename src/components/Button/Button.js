import s from "./Button.module.css";
import cn from "classnames";

function Button({ type, size, children, withIcon }) {
  const classes = {
    action: s.action,
    secondary: s.secondary,
    small: s.small,
    icon: withIcon ? s.iconButton : "",
  };

  const styles = cn(s.button, classes[type], classes[size], classes.icon);

  return <button className={styles}>{children}</button>;
}

export default Button;
