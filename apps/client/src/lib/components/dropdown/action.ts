import type { SvelteComponent } from 'svelte'
import type { ActionReturn } from 'svelte/action'

export interface IDropDownOptions {
	key: string
	value: string
}

export const dropdown = (node: HTMLElement, props: IDropDownOptions[]): ActionReturn => {
	// eslint-disable-next-line prefer-const
	let component: SvelteComponent | null = null

	return {
		update(new_props: typeof props) {
			console.log(new_props)
		},
		destroy() {
			console.log(node.title)
		}
	}
}
