import type { Meta, StoryObj } from '@storybook/angular';
import { EcommerceUi } from './ui';
import { expect } from 'storybook/test';

const meta: Meta<EcommerceUi> = {
  component: EcommerceUi,
  title: 'EcommerceUi',
};
export default meta;

type Story = StoryObj<EcommerceUi>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/ui/gi)).toBeTruthy();
  },
};
