import {
	defineConfig,
	presetIcons,
	presetWebFonts,
	presetWind,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss'

export default defineConfig({
	transformers: [transformerDirectives(), transformerVariantGroup()],
	presets: [
		presetWind(),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
				sans: ['']
			}
		}),
		presetIcons({
			scale: 1.2,
			prefix: 'i-',
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
