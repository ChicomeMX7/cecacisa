// @ts-nocheck
import path from 'path'
import { readdirSync } from 'fs'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import * as dotenv from 'dotenv'
dotenv.config()

const absolutePathAliases: { [key: string]: string } = {}
const srcPath = path.resolve('./src/')
const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map((fileItem) =>
    fileItem.name.replace(/(\.ts){1}(x?)/, '')
)

srcRootContent.forEach((directory) => {
    absolutePathAliases[directory] = path.join(srcPath, directory)
})
const _ = {
    HTML_TITLE: process.env.HTML_TITLE,
    HTML_ICON: process.env.HTML_ICON,
}

export default defineConfig({
    mode: 'test',
    plugins: [react()],
    resolve: {
        alias: {
            ...absolutePathAliases,
        },
    },
    server: {
        port: process.env.PORT,
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test/setup.ts',
    },
    build: {
        assetsDir: 'src/',
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                login: path.resolve(__dirname, 'login.html'),
            },
        },
        sourcemap: true,
        minify: true,
    },
})
