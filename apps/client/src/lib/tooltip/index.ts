import type { ActionReturn } from 'svelte/action'
export { default as Tooltip } from './Tooltip.svelte'

export const tooltip = (node: HTMLElement): ActionReturn => {
	return {
		destroy() {
			node.removeEventListener('mouseenter', (e) => e)
			node.removeEventListener('mouseleave', (e) => e)
		}
	}
}
