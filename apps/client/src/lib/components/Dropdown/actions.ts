import { Dropdown } from '$lib/components'
import type { SvelteComponent } from 'svelte'
import type { Action } from 'svelte/action'

export const dropdown = ((node, props) => {
	let component: SvelteComponent | null = null

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
}) satisfies Action
