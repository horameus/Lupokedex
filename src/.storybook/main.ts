import path from 'path';

export default {
    stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'], // Expressions de resolution vers les fichiers story.tsx
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'], // Ajout des addons installés
    framework: { name: '@storybook/react-vite' }, // Ajout du framework installé
    async viteFinal(config) {
        // Resolution des aliases (voir tsconfig.json et vite.config.ts)
        if (config?.resolve?.alias) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@': path.resolve(__dirname, '..'),
            };
        }
        return config;
    },
};
