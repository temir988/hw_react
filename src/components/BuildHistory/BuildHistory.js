import { useState } from "react";
import { NavLink } from "react-router-dom";

import Header from "../Header/Header";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import TextField from "../TextField/TextField";
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

  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="wrapper">
      <Header>
        <div className={s.title}>
          philip1967/my-awesome-repo-with-long-long-long-repo-name
        </div>
        <div className={s.headerActions}>
          <IconButton type="secondary" icon="play" clickHandler={openModal}>
            Run Build
          </IconButton>
          <NavLink to="/settings" className="link">
            <IconButton type="secondary" icon="setting" />
          </NavLink>
        </div>
      </Header>
      <main className={s.main}>
        <div className={s.cardsList}>
          {cards && cards.map((card) => <Card key={card.number} card={card} />)}
        </div>
        <div className={s.showMore}>
          <Button type="secondary" size="small">
            Show more
          </Button>
        </div>
      </main>
      <Modal open={isOpen}>
        <div className={s.modalTitle}>New build</div>
        <p className={s.modalDecs}>
          Enter the commit hash which you want to build.
        </p>
        <TextField placeholder="Commit hash" />
        <div className={s.modalActions}>
          <Button type="action">Run Build</Button>
          <Button type="secondary" clickHandler={closeModal}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default BuildHistory;
