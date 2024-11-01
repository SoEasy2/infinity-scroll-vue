import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	server: {
		host: true,
		port: 5173,
		open: true,
	},
	build: {
		outDir: 'dist',
		sourcemap: true,
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
			},
			mangle: true,
		},
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					const ext = assetInfo.name.split('.').pop();
					return ext === 'css' ? 'assets/css/[name]-[hash].[ext]' : 'assets/[name]-[hash].[ext]'
				},
				chunkFileNames: 'assets/js/[name]-[hash].js',
				entryFileNames: 'assets/js/[name]-[hash].js',
			},
		},
	},
})
