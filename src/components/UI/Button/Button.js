import React from "react";
import "./style.css";

const STYLES = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  warning: "btn--warning",
  danger: "btn--danger",
  sucess: "btn--success",
};

const SIZES = { medium: "btn--medium", small: "btn--small" };

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  ...others
}) => {
  //   const classBtn = buttonStyle;
  const classDisabled = others.disabled ? "btn-disabled" : "";
  return (
    <button
      {...others}
      className={`btn ${buttonStyle} ${buttonSize} ${classDisabled}`}
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
