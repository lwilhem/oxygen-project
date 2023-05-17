<script lang="ts">
	import { onMount } from 'svelte'

	onMount(() => {
		console.log('mounted')
	})
</script>

<svelte:head>
	<title>Oxygen - API Devtool</title>
	<meta name="description" content="Oxygen - API Devtool In Svelte" />
</svelte:head>

<slot />
