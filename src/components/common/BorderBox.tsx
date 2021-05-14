import React from 'react';
import { BACKGROUND_COLOR } from './colors';

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
}) => (
  <div
    style={{
      borderStyle: 'solid',
      borderRadius: 3,
      padding: 4,
      borderWidth: 2,
      borderColor,
      backgroundColor: bgColor ?? BACKGROUND_COLOR,
      color,
    }}
  >
    {children}
  </div>
);
