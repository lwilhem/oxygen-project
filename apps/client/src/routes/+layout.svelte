<script lang="ts">
	import '@unocss/reset/tailwind-compat.css'
	import 'virtual:uno.css'
</script>

<svelte:head>
	<title>Oxygen - API Devtool</title>
</svelte:head>

<main class="grid grid-cols-18 grid-rows-14 max-h-screen min-h-screen w-full gap-1">
	<nav class="col-span-1 row-span-13 border-r-1">
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
			class="h-20 w-full flex flex-col items-center justify-evenly py-2 transition-all hover:(bg-slate-100)"
		>
			<span class="i-mdi:web h-5 w-5" />
		</a>
		<a
			href="/"
			class="h-20 w-full flex flex-col items-center justify-evenly py-2 transition-all hover:(bg-slate-100)"
		>
			<span class="i-mdi:cog-outline h-5 w-5" />
		</a>
	</nav>

	<section class="col-span-17 row-span-13 flex items-center justify-center">
		<slot />
	</section>
</main>
