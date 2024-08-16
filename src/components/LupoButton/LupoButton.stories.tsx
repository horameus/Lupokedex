import type { Meta, StoryObj } from '@storybook/react';
import '../../styles.global.css';
import LupoButton from './LupoButton';
import './styles.css';

const meta: Meta<typeof LupoButton> = {
    component: LupoButton,
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof LupoButton>;

export const Primary: Story = {
    args: {
        children: 'Search',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Search',
        variant: 'secondary',
    },
};

export const PrimaryDisabled: Story = {
    args: {
        children: 'Search',
        variant: 'primary',
        disabled: true,
    },
};

export const SecondaryDisabled: Story = {
    args: {
        children: 'Search',
        variant: 'secondary',
        disabled: true,
    },
};
