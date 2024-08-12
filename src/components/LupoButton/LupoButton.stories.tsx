import type { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import LupoButton from './LupoButton';

export const ActionsData = {
    onclick: fn(),
};

export default {
    component: LupoButton,
    title: 'LupoButton',
    tags: ['autodocs'],
    args: {
        ...ActionsData,
    },
};

type Story = StoryObj<typeof LupoButton>;

export const Primary: Story = {
    args: {
        variant: 'primary',
    },
};
