import path from 'path';

export default {
    stories: ['../components/**/story.tsx'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: { name: '@storybook/react-vite' },
    async viteFinal(config) {
        if (config?.resolve?.alias) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@': path.resolve(__dirname, '..'),
            };
        }
        return config;
    },
};
