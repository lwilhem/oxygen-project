<script lang="ts">
	import '@unocss/reset/tailwind-compat.css'
	import 'virtual:uno.css'

	let a = 'test'
</script>

<svelte:head>
	<title>Oxygen - API Devtool</title>
</svelte:head>

<main class="grid grid-cols-15 grid-rows-4 max-h-screen min-h-screen w-full">
	<nav class="col-span-1 row-span-full">
		<span>t</span>
	</nav>
	<section class="col-span-14 row-span-full">
		<slot />
	</section>
</main>
