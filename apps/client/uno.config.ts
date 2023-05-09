import extractorSvelte from '@unocss/extractor-svelte'
import {
	defineConfig,
	presetIcons,
	presetUno,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss'

export default defineConfig({
	extractors: [extractorSvelte()],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	presets: [
		presetUno({ dark: 'class' }),
		presetIcons({
			scale: 1.2,
			prefix: 'i-',
			collections: {
				tabler: () => import('@iconify-json/tabler/icons.json').then((i) => i.default)
			},
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle'
			}
		})
	]
})
