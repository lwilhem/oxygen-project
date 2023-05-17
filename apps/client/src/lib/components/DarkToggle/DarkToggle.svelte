<script lang="ts">
	import type { ActionReturn } from 'svelte/action'

	const toggledark = (node: HTMLElement): ActionReturn => {
		node.addEventListener('click', (e) => {
			e.preventDefault()
			window.document.body.classList.toggle('dark')
		})

		return {
			destroy() {
				node.removeEventListener('click', (e) => e)
			}
		}
	}
</script>

<button use:toggledark>
	<span class="i-mdi:moon-waning-crescent dark:i-mdi:lightbulb" />
</button>
