import React, { useState } from "react";
import s from "./TextField.module.css";
import { ReactComponent as ClearIcon } from "./clear.svg";
import classNames from "classnames";

export default function TextField({
  label,
  required,
  placeholder,
  inline = false,
  value = "",
}) {
  const [text, setText] = useState(value);

  const inputHandler = (e) => {
    setText(e.target.value);
  };

  const clearTextField = () => {
    setText("");
  };

  const inputClasses = classNames(s.input, inline ? s.inline : "");

  return (
    <div>
      {label && (
        <label htmlFor="" className={s.label}>
          {label}
          {required && <span className={s.required}>*</span>}
        </label>
      )}

      <div className={s.wrapper}>
        <input
          type="text"
          placeholder={placeholder}
          className={inputClasses}
          value={text}
          onInput={inputHandler}
          required={required}
        />

        {!inline && text && (
          <button className={s.clear} onClick={clearTextField}>
            <ClearIcon />
          </button>
        )}
      </div>
    </div>
  );
}
