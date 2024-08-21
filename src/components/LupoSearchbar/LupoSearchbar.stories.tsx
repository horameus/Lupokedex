import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import '../../styles.global.css';
import LupoSearchbar from './LupoSearchbar';
import './styles.css';

const meta: Meta<typeof LupoSearchbar> = {
    component: LupoSearchbar,
    parameters: {
        layout: 'centered',
    },
    decorators: (_, { args }) => {
        const [value, setValue] = React.useState('');
        const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
        return <LupoSearchbar {...args} onChange={onChange} value={value} />;
    },
    argTypes: {
        onChange: { table: { disable: true } },
        value: { table: { disable: true } },
    },
};
export default meta;

type Story = StoryObj<typeof LupoSearchbar>;

export const Primary: Story = {
    args: {
        placeholder: 'Search',
        disabled: false,
    },
};
