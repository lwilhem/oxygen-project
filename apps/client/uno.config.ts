import {
	defineConfig,
	presetIcons,
	presetWebFonts,
	presetWind,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss'

export default defineConfig({
	shortcuts: {
		'nav-btn':
			'h-20 w-full flex flex-col items-center justify-evenly border-b-1 border-b-zinc-50 py-2'
	},
	transformers: [transformerDirectives(), transformerVariantGroup()],
	presets: [
		presetWind(),
		presetWebFonts({
			provider: 'google',
			fonts: {
				sans: ['Inter:100,200,300,400,500,600,700,800,900']
			}
		}),
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
