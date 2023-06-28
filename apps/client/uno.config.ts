import { defineConfig, presetIcons, presetTypography, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons({
			scale: 1.2,
			prefix: 'i-',
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle'
			},
			collections: {
				mdi: () => import('@iconify-json/mdi/icons.json').then((i) => i.default)
			}
		}),
		presetTypography(),
		presetWebFonts({
			fonts: {
				sans: 'DM Sans',
				serif: 'DM Serif Display',
				mono: 'DM Mono'
			}
		})
	]
})
