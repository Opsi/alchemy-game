import { color } from "@chakra-ui/styled-system"
import React from "react"
import { BACKGROUND_COLOR } from "./colors"

export interface BorderBoxProps {
  borderColor: string
  bgColor?: string
  color?: string
}

export const BorderBox: React.FC<BorderBoxProps> = ({
  borderColor,
  bgColor,
  color,
  children,
}) => {
  return <div
    style={{
      borderStyle: "solid",
      borderRadius: 3,
      padding: 4,
      borderWidth: 2,
      borderColor: borderColor,
      backgroundColor: bgColor ?? BACKGROUND_COLOR,
      color,
    }}
  >
    {children}
  </div>
}