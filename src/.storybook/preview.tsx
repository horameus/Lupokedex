import { Preview, StoryFn } from '@storybook/react';
import React from 'react';
import '../styles.global.css';

const Decorator = (Story: StoryFn) => {
    // Enveloppe les stories
    return (
        <div style={{ boxSizing: 'border-box', display: 'flex', padding: '2rem' }}>
            <Story />
        </div>
    );
};

const preview: Preview = {
    decorators: [Decorator],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen',
        options: {
            storySort: {
                order: ['*'],
            },
        },
    },
};

export default preview;
