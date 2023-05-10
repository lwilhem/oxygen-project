<script lang="ts">
	import '@unocss/reset/tailwind-compat.css'
	import 'virtual:uno.css'
</script>

<svelte:head>
	<title>Oxygen - API Devtool</title>
</svelte:head>

<main class="grid grid-cols-18 grid-rows-14 max-h-screen min-h-screen w-full">
	<nav class="col-span-1 row-span-14 border-r-1">
		<a
			href="/"
			class="h-20 w-full flex flex-col items-center justify-evenly py-2 transition-all hover:(bg-slate-100)"
		>
			<span class="i-mdi:link h-5 w-5" />
		</a>

		<a
			href="/"
			class="h-20 w-full flex flex-col items-center justify-evenly py-2 transition-all hover:(bg-slate-100)"
		>
			<span class="i-mdi:graphql h-5 w-5" />
		</a>

		<a
			href="/"
			class="h-20 w-full flex flex-col items-center justify-evenly border-b--1 py-2 transition-all hover:(bg-slate-100)"
		>
			<span class="i-mdi-clock-time-five-outline h-5 w-5" />
		</a>
	</nav>

	<section class="col-span-17 row-span-14 flex flex-col items-center justify-center px-2">
		<slot />
	</section>
</main>
