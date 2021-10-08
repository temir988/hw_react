import s from "./IconButton.module.css";
import Button from "../Button/Button";
import { ReactComponent as SettingIcon } from "./setting.svg";
import { ReactComponent as PlayIcon } from "./play.svg";

function IconButton({ icon, children }) {
  const icons = {
    setting: <SettingIcon className={s.icon} />,
    play: <PlayIcon />,
  };
  console.log(children);
  const Icon = icon ? icons[icon] : null;
  return (
    <Button type="secondary" size="small" withIcon={true}>
      {Icon}
      {children && <span className={s.text}>{children}</span>}
    </Button>
  );
}

export default IconButton;
