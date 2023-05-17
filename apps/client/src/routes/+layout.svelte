<script lang="ts">
	import '@unocss/reset/tailwind-compat.css'
	import 'virtual:uno.css'

	const toggleDarkMode = () => window.document.body.classList.toggle('dark')
</script>

<svelte:head>
	<title>Oxygen - API Devtool</title>
	<meta name="description" content="Oxygen - API Devtool In Svelte" />
</svelte:head>

<main class="h-screen w-screen" bg="zinc-100 dark:zinc-900" text="zinc-900 dark:zinc-100 sm">
	<section class="h-6% flex items-center justify-center">
		<span class="i-mdi:atom-variant h-8 w-8 cursor-pointer" />
	</section>

	<section class="h-89%" border="y-1 y-zinc-300 dark:y-zinc-700">
		<slot />
	</section>

	<section class="h-5% flex items-center justify-center py-1">
		<button
			on:click={toggleDarkMode}
			class="h-full w-8"
			bg="zinc-900 dark:zinc-100"
			text="zinc-100 dark:zinc-900"
		>
			<span class="i-mdi:weather-sunny h-6 w-6" />
		</button>
	</section>
</main>

<style>
	:global(*) {
		--at-apply: transition-all;
	}
</style>
