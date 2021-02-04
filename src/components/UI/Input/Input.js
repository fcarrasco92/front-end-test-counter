import React from "react";
import "./style.css";

const STYLES_INPUT = {
  primary: "input--primary",
  secondary: "input--secondary",
  gray: "input--gray",
  generic: "generic",
};

const Input = ({ label, placeholder, onChange, value, id, inputStyle }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={`txt ${inputStyle}`}
        type="text"
        value={value}
        id={id}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.defaultProps = {
  inputStyle: STYLES_INPUT.primary,
};

export { Input, STYLES_INPUT };
