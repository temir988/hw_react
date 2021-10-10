import React, { useState } from "react";
import s from "./TextField.module.css";
import { ReactComponent as ClearIcon } from "./clear.svg";

export default function TextField({
  label,
  required,
  placeholder,
  value = "",
  name = "",
  inputHandler,
}) {
  const [text, setText] = useState(value);

  const handler = (e) => {
    setText(e.target.value);
    inputHandler(e);
  };

  const clearTextField = () => {
    setText("");
  };

  return (
    <div>
      {label && (
        <label className={s.label}>
          {label}
          {required && <span className={s.required}>*</span>}
        </label>
      )}

      <div className={s.wrapper}>
        <input
          type="text"
          placeholder={placeholder}
          className={s.input}
          value={text}
          onInput={handler}
          required={required}
          name={name}
        />

        {text && (
          <button className={s.clear} onClick={clearTextField}>
            <ClearIcon />
          </button>
        )}
      </div>
    </div>
  );
}
