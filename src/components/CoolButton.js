// src/components/CoolButton.js
import React from "react";
import "bulma/css/bulma.css";

const BULMA_CLASS_MAP = {
  // prop name : bulma class
  isCentered: "is-centered",
  isActive: "is-active",
  isBlack: "is-black",
  isDanger: "is-danger",
  isDark: "is-dark",
  isFocused: "is-focused",
  isGrouped: "is-grouped",
  isHovered: "is-hovered",
  isInfo: "is-info",
  isInverted: "is-inverted",
  isLarge: "is-large",
  isLight: "is-light",
  isLink: "is-link",
  isLoading: "is-loading",
  isMedium: "is-medium",
  isOutlined: "is-outlined",
  isPrimary: "is-primary",
  isRight: "is-right",
  isRounded: "is-rounded",
  isSelected: "is-selected",
  isSmall: "is-small",
  isStatic: "is-static",
  isSuccess: "is-success",
  isText: "is-text",
  isWarning: "is-warning",
  isWhite: "is-white",
};

function CoolButton({ children, className = "", as = "button", ...rest }) {
  const classes = ["button"];

  // convert truthy props into Bulma classes and strip them from DOM props
  Object.keys(BULMA_CLASS_MAP).forEach((key) => {
    if (rest[key]) {
      classes.push(BULMA_CLASS_MAP[key]);
      delete rest[key];
    }
  });

  const Tag = as; // e.g. "button" or "a"
  const finalClassName = `${classes.join(" ")}${
    className ? " " + className : ""
  }`;

  return (
    <Tag className={finalClassName} {...rest}>
      {children}
    </Tag>
  );
}

export default CoolButton;
