import type { ActionReturn } from 'svelte/action'

export interface IDropDownProps {
	values: string[]
	is_active: boolean
}

export const dropdown = (node: HTMLElement, props: IDropDownProps): ActionReturn => {
	node.addEventListener('click', () => console.log(props))

	return {
		destroy() {
			node.removeEventListener('click', () => console.log('remove dropdown'))
		},
		update(new_props: typeof props) {
			props = new_props
		}
	}
}
