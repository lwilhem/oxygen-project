<script lang="ts">
	import { page } from '$app/stores'
	import '@unocss/reset/tailwind-compat.css'
	import 'virtual:uno.css'
</script>

<svelte:head>
	<title>Oxygen - API Devtool</title>
	<meta name="description" content="Oxygen - API Devtool In Svelte" />
</svelte:head>

<main class="h-screen w-screen" bg="zinc-50 dark:zinc-950" text="zinc-900 dark:zinc-100 sm">
	<section class="h-6% flex items-center justify-center">
		<span class="i-mdi:atom-variant h-8 w-8 cursor-pointer" />
	</section>

	<section class="h-89% flex items-center justify-center" border="y-1 y-zinc-300 dark:y-zinc-700">
		<aside class="h-full w-22" border="r-1 r-zinc-300 dark:r-zinc-700">
			<a
				href="/"
				class="h-20 flex flex-col items-center justify-center"
				class:nav_active={$page.url.pathname === '/'}
			>
				<span class="i-mdi:link h-6 w-6" />
				<span class="my-1 font-semibold uppercase">rest</span>
			</a>
		</aside>
		<div class="h-full w-full flex items-center justify-center">
			<slot />
		</div>
	</section>

	<section class="h-5% flex items-center justify-center py-1">
		<button
			on:click={() => window.document.body.classList.toggle('dark')}
			class="h-full w-8"
			bg="zinc-50 dark:zinc-900"
			text="zinc-900 dark:zinc-100"
		>
			<span class="i-mdi:weather-sunny h-6 w-6" />
		</button>
	</section>
</main>

<style>
	.nav_active {
		--at-apply: border-l-4 border-l-teal-500 bg-zinc-100;
		--at-apply: 'dark:bg-zinc-800';
	}
</style>
