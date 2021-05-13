import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import React from "react"

export interface ButtonProps extends ChakraButtonProps {
  label?: string
}

export const Button: React.FC<ButtonProps> = ({ label, children, ...props }) => {
  return <ChakraButton {...props}>
    {label !== undefined ? label : children}
  </ChakraButton>
}
