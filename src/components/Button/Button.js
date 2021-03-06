import s from "./Button.module.css";
import cn from "classnames";

function Button({
  type,
  size,
  children,
  withIcon,
  clickHandler = () => {},
  action = "",
  disabled = false,
}) {
  const classes = {
    action: s.action,
    secondary: s.secondary,
    small: s.small,
    icon: withIcon ? s.iconButton : "",
  };

  const styles = cn(s.button, classes[type], classes[size], classes.icon);

  return (
    <button
      className={styles}
      onClick={clickHandler}
      type={action}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
