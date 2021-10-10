import ReactDOM from "react-dom";
import s from "./Modal.module.css";

export default function Modal({ open, children }) {
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      <div className={s.backdrop} />
      <div className={s.modal}>{children}</div>
    </>,
    document.getElementById("root-modal")
  );
}
