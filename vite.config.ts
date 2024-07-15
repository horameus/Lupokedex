import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    define: { global: 'globalThis' },
    server: {
        port: 3005,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
});
