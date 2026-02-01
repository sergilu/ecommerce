import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { Button } from './button';

const meta: Meta<Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    isIcon: {
      control: 'boolean',
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<Button>;

export const Icon: Story = {
  args: {
    label: '+',
    isIcon: true,
  },
};
