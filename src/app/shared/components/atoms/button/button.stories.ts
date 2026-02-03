import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { Button, type ButtonStyle } from './button';

const meta: Meta<Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: ['default', 'ghost'] satisfies ButtonStyle[],
    },
    isIcon: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<Button>;

export const Default: Story = {
  args: {
    label: 'Button',
    variant: 'default',
    isDisabled: false,
    isIcon: false,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading...',
    variant: 'default',
    isLoading: true,
    isDisabled: false,
    isIcon: false,
  },
};

export const Icon: Story = {
  args: {
    label: '+',
    isIcon: true,
  },
};
