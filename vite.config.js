import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/home.js',
                'resources/js/catalog.js'
            ],
            refresh: true,
        }),
        vue(),
        
    ],
    base: '/',
    build:{
        outDir: 'dist'
    }
})