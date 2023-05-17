import extractorSvelte from '@unocss/extractor-svelte'
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetWind,
	transformerAttributifyJsx,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss'

export default defineConfig({
	extractors: [extractorSvelte()],
	transformers: [transformerDirectives(), transformerVariantGroup(), transformerAttributifyJsx()],
	presets: [
		presetWind({
			dark: 'class'
		}),
		presetAttributify(),
		presetIcons({
			collections: {
				mdi: () => import('@iconify-json/mdi/icons.json').then((i) => i.default)
			},
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle'
			}
		})
	]
})
