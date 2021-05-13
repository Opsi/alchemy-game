import React, { CSSProperties, useState } from "react"
import { useHover } from "./useHover"

export interface ButtonProps {
  onClick?: () => void
  disabled?: boolean
  label?: string
  warning?: boolean
  bgColor?: string
  bgColorOnHover?: string
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  warning,
  children,
  bgColor,
  bgColorOnHover,
}) => {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover();

  const style: CSSProperties = {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    background: isHovered ? bgColorOnHover : bgColor,
    color: '#fff',
    fontSize: '15px',
    cursor: 'pointer',
    transition: '.3s background',
  }

  return <button
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    disabled={disabled}
    style={style}
  >
    {label !== undefined ? label : children}
  </button>
}
