import type { Meta, StoryObj } from '@storybook/angular';
import { Counter } from './counter';

const meta: Meta<Counter> = {
  title: 'Molecules/Counter',
  component: Counter,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' },
    step: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<Counter>;

export const Default: Story = {
  args: {
    value: 0,
    step: 1,
    min: 0,
    max: null,
    disabled: false,
  },
};
