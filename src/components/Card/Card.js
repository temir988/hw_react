import { ReactComponent as BranchIcon } from "./branch.svg";
import { ReactComponent as DateIcon } from "./date.svg";
import { ReactComponent as TimeIcon } from "./time.svg";
import { ReactComponent as UserIcon } from "./user.svg";
import { ReactComponent as SuccessIcon } from "./success.svg";
import { ReactComponent as FailIcon } from "./fail.svg";
import { ReactComponent as PendingIcon } from "./pending.svg";
import s from "./Card.module.css";
import classNames from "classnames";

export default function Card({ card }) {
  const icons = {
    success: <SuccessIcon />,
    fail: <FailIcon />,
    pending: <PendingIcon />,
  };

  return (
    <div className={s.card}>
      <div className={s.left}>
        <div className={s.icon}>{icons[card.status]}</div>
        <div className={s.titleRow}>
          <span className={classNames(s.number, s[card.status])}>
            #{card.number}
          </span>
          <span className={s.text}>{card.text}</span>
        </div>
        <div className={s.descRow}>
          <span className={s.iconText}>
            <BranchIcon />
            {card.branch}
            <span className={s.hash}>{card.hash}</span>
          </span>
          <span className={s.iconText}>
            <UserIcon />
            {card.author}
          </span>
        </div>
      </div>
      <div className={s.date}>
        <div className={s.iconText}>
          <DateIcon /> {card.date}
        </div>
        <div className={s.iconText}>
          <TimeIcon /> {card.time}
        </div>
      </div>
    </div>
  );
}
