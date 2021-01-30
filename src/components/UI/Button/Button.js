import React from "react";
import "./style.css";

const STYLES = {
  primary: "btn--primary--solid",
  warning: "btn--warning--solid",
  danger: "btn--danger--solid",
  sucess: "btn--success--solid",
};

const SIZES = { medium: "btn--medium", small: "btn--small" };

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  //   const classBtn = buttonStyle;
  return (
    <button
      className={`btn ${buttonStyle} ${buttonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  buttonStyle: STYLES.primary,
  children: null,
  onClick: () => {},
  buttonSize: SIZES.medium,
};

export { Button, STYLES, SIZES };
