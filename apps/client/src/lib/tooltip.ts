import type { ActionReturn } from 'svelte/action'
import { Tooltip } from './components'

export interface ITooltipActionProps {
	content: string
}

export const tooltip = (node: HTMLElement, props: ITooltipActionProps): ActionReturn => {
	let component: Tooltip | null = null
	const title = node.getAttribute('title')

	if (title) {
		node.removeAttribute('title')
		props = { ...props, content: title }
	}

	node.addEventListener('mouseenter', (e) => {
		if (!component) {
			component = new Tooltip({
				target: node,
				props
			})
		}
	})
	node.addEventListener('mouseleave', (e) => {
		if (component) {
			component.$destroy()
			component = null
		}
	})

	node.style.position = 'relative'

	return {
		destroy() {
			node.removeEventListener('mouseenter', (e) => e)
			node.removeEventListener('mouseleave', (e) => e)

			if (title) {
				node.setAttribute('title', title)
			}
		}
	}
}
