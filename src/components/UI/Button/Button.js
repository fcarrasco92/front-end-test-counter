import React from "react";
import "./style.css";

const STYLES = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  gray: "btn--gray",
  warning: "btn--warning",
  danger: "btn--danger",
  sucess: "btn--success",
  generic: "generic",
  transparent: "btn--transparent",
};

const SIZES = {
  medium: "btn--medium",
  small: "btn--small",
  circle: "btn--circle",
  generic: "generic",
};

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
