import React, { useState } from "react";
import s from "./TextField.module.css";
import { ReactComponent as ClearIcon } from "./clear.svg";

export default function TextField({
  label,
  required,
  placeholder,
  value = "",
}) {
  const [text, setText] = useState(value);

  const inputHandler = (e) => {
    setText(e.target.value);
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
          onInput={inputHandler}
          required={required}
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
