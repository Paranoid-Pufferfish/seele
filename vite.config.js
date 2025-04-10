import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    server: {
        port: 5179,
        open: true,
    },
    define: {
        apiurl: JSON.stringify('https://crystal.tilde.institute/mellow/'),
        assetsurl: JSON.stringify('https://crystal.tilde.institute/mellow/')
    }
})
