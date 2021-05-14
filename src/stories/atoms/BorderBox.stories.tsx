import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BorderBox, BorderBoxProps } from '../../components/common/BorderBox';

const meta: Meta<BorderBoxProps> = {
  title: 'Atoms/BorderBox',
  component: BorderBox,
  argTypes: {
    bgColor: { control: 'color' },
    borderColor: { control: 'color' },
  },
};

export default meta;

export const Primary: Story<BorderBoxProps> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <BorderBox {...args}>
    <button type="button">Test</button>
  </BorderBox>
);
