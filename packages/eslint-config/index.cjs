/**@type {import('eslint').ESLint.ConfigData} */
const eslintConfig = {
	//root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	ignorePatterns: ['*.js', '*.mjs', '*.cjs', '*.css'],
	plugins: ['@typescript-eslint', 'svelte', 'unused-imports'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'turbo',
		'prettier'
	],
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	rules: {
		'@typescript-eslint/no-unused-vars': 'off'
	}
}

module.exports = eslintConfig
