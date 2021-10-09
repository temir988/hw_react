import React from "react";

export default function FormInput({ label }) {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type="text" />
    </div>
  );
}
