<script lang="ts">
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'

	if (browser) {
		onMount(() => console.log('hello world!'))
	}
</script>

<span>page</span>
