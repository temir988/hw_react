import { NavLink } from "react-router-dom";

import Header from "../Header/Header";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import Card from "../Card/Card";
import s from "./BuildHistory.module.css";

function BuildHistory() {
  const cards = [
    {
      status: "success",
      number: 1368,
      text: "Super cool UI kit for making websites that look like games",
      branch: "super-cool-ui-kit",
      hash: "9c9f0b9",
      author: "Vadim Makeev",
      date: "21 янв, 03:06",
      time: "1 ч 20 мин",
    },
    {
      status: "fail",
      number: 1366,
      text: "Super cool UI kit for making websites that look like games",
      branch: "master",
      hash: "b4636ab",
      author: "Philip Kirkorov",
      date: "21 янв, 03:06",
      time: "1 ч 20 мин",
    },
    {
      status: "pending",
      number: 1365,
      text: "upgrade typescript to 3.8",
      branch: "master",
      hash: "b4636ab",
      author: "Vadim Makeev",
      date: "21 янв, 03:06",
      time: "1 ч 20 мин",
    },
  ];

  return (
    <div className="wrapper">
      <Header>
        <div className={s.title}>
          philip1967/my-awesome-repo Run build Rebuild
        </div>
        <div className={s.headerActions}>
          <IconButton type="secondary" icon="play">
            Run Build
          </IconButton>
          <IconButton type="secondary" icon="setting" />
        </div>
      </Header>
      <main className={s.main}>
        <div className={s.cardsList}>
          {cards && cards.map((card) => <Card key={card.number} card={card} />)}
        </div>
      </main>
    </div>
  );
}

export default BuildHistory;
