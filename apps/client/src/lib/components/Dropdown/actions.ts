import { Dropdown } from '$lib/components'
import type { ActionReturn } from 'svelte/action'

export interface IDropDownProps {
	values: string[]
}

export const dropdown = (node: HTMLElement, props: IDropDownProps): ActionReturn => {
	let component: Dropdown | null = null

	node.addEventListener('click', () => {
		if (!component) {
			component = new Dropdown({ target: node, props })
		} else {
			component.$destroy()
			component = null
		}
	})

	return {
		destroy() {
			node.removeEventListener('click', () => {
				if (!component) {
					component = new Dropdown({ target: node, props })
				} else {
					component.$destroy()
					component = null
				}
			})
		},
		update(new_props: typeof props) {
			props = new_props
		}
	}
}
