import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetWind,
	transformerAttributifyJsx,
	transformerCompileClass,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss'

export default defineConfig({
	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
		transformerAttributifyJsx(),
		transformerCompileClass()
	],
	presets: [
		presetWind(),
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
