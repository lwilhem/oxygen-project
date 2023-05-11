<script lang="ts">
	import { page } from '$app/stores'
	import '@unocss/reset/tailwind-compat.css'
	import 'virtual:uno.css'

	let active_url = $page.url.pathname
</script>

<svelte:head>
	<title>Oxygen - API Devtool</title>
	<meta name="description" content="Svelte Implemation of the oxygen core" />
</svelte:head>

<main class="grid grid-cols-24 grid-rows-14 max-h-screen min-h-screen w-full">
	<nav class="col-span-1 row-span-14 border-r-1">
		<a
			href="/"
			class="h-20 w-full flex flex-col items-center justify-evenly py-2 transition-all hover:(bg-slate-100)"
			class:active={active_url === '/'}
		>
			<span class="i-mdi:link h-5 w-5" />
		</a>

		<a
			href="/"
			class="h-20 w-full flex flex-col items-center justify-evenly py-2 transition-all hover:(bg-slate-100)"
			class:active={active_url === '/graphql'}
		>
			<span class="i-mdi:graphql h-5 w-5" />
		</a>

		<a
			href="/"
			class="h-20 w-full flex flex-col items-center justify-evenly py-2 transition-all hover:(bg-slate-100)"
			class:active={active_url.includes('/realtime')}
		>
			<span class="i-mdi-clock-time-five-outline h-5 w-5" />
		</a>
	</nav>

	<section class="col-span-23 row-span-14 flex flex-col items-center justify-center">
		<slot />
	</section>
</main>

<style lang="postcss">
	.active {
		@apply border-l-4 border-l-indigo-700 transition-all;
	}
</style>
