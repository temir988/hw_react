import { useEffect, useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import NumberFormat from "react-number-format";
import { useSelector, useDispatch } from "react-redux";

import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import s from "./Settings.module.css";
import Modal from "../Modal/Modal";
import { changeInput } from "../../features/settings/settingsSlice";

function Settings() {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [hasError, setHasError] = useState(false);

  let delayTimeout = null;

  useEffect(() => {
    return () => {
      clearTimeout(delayTimeout);
    };
  }, [delayTimeout]);

  const changeHandler = (e) => {
    const { value, name } = e.target;
    dispatch(changeInput({ name, value }));
  };

  const cloneRepository = (form) => {
    return new Promise((resolve, reject) => {
      const random = Math.random();
      delayTimeout = setTimeout(() => {
        if (random < 0.5) {
          resolve("successed clone");
        } else {
          reject("Time out");
        }
      }, 3000);
    });
  };

  const showError = () => {
    setHasError(true);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      await cloneRepository();
      setRedirect("/");
    } catch {
      showError();
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setHasError(false);
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  const numberChange = (values) => {
    const { formattedValue } = values;
    dispatch(changeInput({ name: "sync", value: formattedValue }));
  };

  const cancelForm = (e) => {
    e.preventDefault();
    setRedirect("/");
  };

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
        <form className={s.form} onSubmit={submitHandler}>
          <TextField
            label="GitHub repository"
            placeholder="user-name/repo-name"
            required
            name="repository"
            value={settings.repository}
            inputHandler={changeHandler}
          />
          <TextField
            label="Build command"
            placeholder="user-name/repo-name"
            required
            name="command"
            value={settings.command}
            inputHandler={changeHandler}
          />
          <TextField
            label="Main branch"
            placeholder="user-name/repo-name"
            name="branch"
            value={settings.branch}
            inputHandler={changeHandler}
          />
          <div className={s.sync}>
            Synchronize every
            <NumberFormat
              value={settings.sync}
              className={s.inputNumber}
              onValueChange={numberChange}
            />
            minutes
          </div>
          <div className={s.actions}>
            <Button type="action" action="submit" disabled={isLoading}>
              Save
            </Button>
            <Button
              type="secondary"
              disabled={isLoading}
              clickHandler={cancelForm}
            >
              Cancel
            </Button>
          </div>
        </form>
      </main>

      <Modal open={hasError}>
        <p>
          <strong>Произошла ошибка!</strong>
        </p>
        <Button type="secondary" clickHandler={closeModal}>
          Close
        </Button>
      </Modal>
    </div>
  );
}

export default Settings;
