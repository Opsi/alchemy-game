import React, { CSSProperties } from "react";
import { useHover } from "./useHover";

export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
  bgColor?: string;
  bgColorOnHover?: string;
  warning?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  children,
  bgColor,
  bgColorOnHover,
}) => {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover();

  const style: CSSProperties = {
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    background: isHovered ? bgColorOnHover : bgColor,
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
    transition: ".1s background",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      style={style}
    >
      {label !== undefined ? label : children}
    </button>
  );
};
