import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '../../components/common/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    bgColor: { control: 'color' },
    bgColorOnHover: { control: 'color' },
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
};
