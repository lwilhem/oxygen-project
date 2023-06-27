import type { Config } from 'tailwindcss'

function defineTailwindConfig(config: Config): Config {
	return config
}

export default defineTailwindConfig({
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: []
})
