import react from "@vitejs/plugin-react"
import { join, resolve } from "path"
import type { UserConfig } from "vite"
import { defineConfig, normalizePath } from "vite"

/**
 * vite配置
 * https://vitejs.dev/config
 */
export default defineConfig((): UserConfig => {
	return {
		server: {
			port: 3000,
			host: "0.0.0.0"
		},
		resolve: {
			alias: [
				{ find: "@", replacement: join(__dirname, "src") },
			]
		},
		plugins: [react()],
		css: {
			modules: {
				localsConvention: "camelCaseOnly",
				generateScopedName: "[local]_[hash:base64:10]"
			},
			preprocessorOptions: {
				less: {
					additionalData: `
						@import "${normalizePath(resolve("./src/assets/styles/variables.less"))}";
						@import "${normalizePath(resolve("./src/assets/styles/mixins.less"))}";
					`,
					javascriptEnabled: true
				}
			}
		},
		build: {
			sourcemap: false,
			minify: true,
			cssMinify: true,
			cssCodeSplit: false,
			modulePreload: false
		}
	}
})
