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

<main
	class="h-screen w-screen flex flex-col items-center justify-center"
	bg="zinc-100 dark:zinc-900"
	text="zinc-900 dark:zinc-100"
>
	<slot />
</main>
