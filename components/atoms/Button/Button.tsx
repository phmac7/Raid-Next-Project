import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  label: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ label, color }) => {
  return (
    <button
      className={
        color === "error" ? styles["btn--error"] : styles["btn--primary"]
      }
    >
      {label}
    </button>
  );
};

export default Button;
