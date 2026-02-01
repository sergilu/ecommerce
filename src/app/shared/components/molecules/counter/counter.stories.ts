import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { Counter } from './counter';

const meta: Meta<Counter> = {
  title: 'Molecules/Counter',
  component: Counter,
  tags: ['autodocs'],
  argTypes: {
    initialCount: { control: 'number' },
    step: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<Counter>;

export const Default: Story = {
  args: {
    initialCount: 0,
    step: 1,
    min: 0,
    max: null,
  },
};
