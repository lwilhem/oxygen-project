import extractorSvelte from '@unocss/extractor-svelte'
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetWebFonts,
	presetWind,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss'

export default defineConfig({
	extractors: [extractorSvelte()],
	transformers: [transformerDirectives(), transformerVariantGroup()],
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
		}),
		presetWebFonts({
			provider: 'google',
			fonts: {
				sans: {
					name: 'Inter',
					weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
					italic: false
				}
			}
		})
	]
})
