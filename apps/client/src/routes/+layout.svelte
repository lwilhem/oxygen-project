<script lang="ts">
	import { tippy } from '$lib'
	import '@unocss/reset/tailwind-compat.css'
	import 'tippy.js/animations/perspective-subtle.css'
	import 'virtual:uno.css'
</script>

<svelte:head>
	<title>Oxygen - API Devtool</title>
</svelte:head>

<main class="grid grid-cols-24 grid-rows-14 max-h-screen min-h-screen w-full">
	<nav class="col-span-1 row-span-14 border-r-1">
		<a
			href="/"
			class="h-20 w-full flex flex-col items-center justify-evenly py-2 transition-all hover:(bg-slate-100)"
			use:tippy={{
				content: 'REST',
				placement: 'right',
				arrow: true,
				theme: 'light-mode',
				animation: 'perspective-subtle'
			}}
		>
			<span class="i-mdi:link h-5 w-5" />
		</a>

		<a
			href="/"
			class="h-20 w-full flex flex-col items-center justify-evenly py-2 transition-all hover:(bg-slate-100)"
			use:tippy={{
				content: 'GraphQL - WIP',
				placement: 'right',
				arrow: true,
				theme: 'light-mode',
				animation: 'perspective-subtle'
			}}
		>
			<span class="i-mdi:graphql h-5 w-5" />
		</a>

		<a
			href="/"
			class="h-20 w-full flex flex-col items-center justify-evenly py-2 transition-all hover:(bg-slate-100)"
			use:tippy={{
				content: 'Realtime - WIP',
				placement: 'right',
				arrow: true,
				theme: 'light-mode',
				animation: 'perspective-subtle'
			}}
		>
			<span class="i-mdi-clock-time-five-outline h-5 w-5" />
		</a>
	</nav>

	<section class="col-span-23 row-span-14 flex flex-col items-center justify-center">
		<slot />
	</section>
</main>

<style lang="postcss">
	:global(.tippy-box[data-theme~='light-mode']) {
		@apply inline-block py-1 px-2.5 text-sm font-medium rounded-lg shadow-sm;
		@apply bg-slate-100 text-zinc-900;
	}

	:global(.tippy-box[data-theme~='dark-mode']) {
		@apply inline-block py-1 px-2.5 text-sm font-medium rounded-lg shadow-sm;
		@apply text-slate-100 bg-zinc-900;
	}
</style>
