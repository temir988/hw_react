import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../Header/Header";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import TextField from "../TextField/TextField";
import s from "./BuildHistory.module.css";

import data from "./data.json";

function BuildHistory() {
  const settings = useSelector((state) => state.settings);
  const cards = data;

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="wrapper">
      <Header>
        <div className={s.title}>{settings.repository}</div>
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
          <Button type="action" clickHandler={closeModal}>
            Run Build
          </Button>
          <Button type="secondary" clickHandler={closeModal}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default BuildHistory;
