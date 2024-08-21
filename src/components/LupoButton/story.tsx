import type { Meta, StoryObj } from '@storybook/react';
import LupoButton from './LupoButton';
import { LupoButtonProps } from './types';

const meta: Meta<LupoButtonProps> = {
    title: 'Inputs/LupoButton',
    component: LupoButton,
};

type Story = StoryObj<typeof meta>;
export default meta;

export const Primary: Story = {
    argTypes: {
        children: {
            control: { type: 'text' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary'],
        },
    },
    args: {
        variant: 'primary',
        children: 'Primary Button',
        disabled: false,
    },
};
