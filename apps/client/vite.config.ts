import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

import unocss from '@unocss/svelte-scoped/vite'
import { transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
	plugins: [
		unocss({
			injectReset: '@unocss/reset/tailwind-compat.css',
			cssFileTransformers: [transformerDirectives(), transformerVariantGroup()]
		}),
		sveltekit()
	]
})
