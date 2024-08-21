import type { Meta, StoryObj } from '@storybook/react';
import '../../styles.global.css';
import { LupoIcon } from './index';

const meta: Meta<typeof LupoIcon> = {
    component: LupoIcon,
    parameters: {
        layout: 'centered',
    },
    decorators: (_, { args }) => {
        return (
            // @ts-expect-error
            <div style={{ color: args.color }}>
                <LupoIcon.SearchIcon />
            </div>
        );
    },
    argTypes: {
        // @ts-expect-error
        color: {
            control: { type: 'color' },
        },
    },
};
export default meta;

type Story = StoryObj<typeof LupoIcon>;

export const Primary: Story = {
    args: {},
};
