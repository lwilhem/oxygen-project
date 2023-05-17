<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'

	let isZenMode = false
	let pathname = $page.url.pathname
</script>

<svelte:head>
	<title>Oxygen - API Devtool</title>
	<meta name="description" content="Oxygen - API Devtool In Svelte" />
</svelte:head>

<main class="h-screen w-screen justify-center">
	{#if !isZenMode}
		<section class="h-6% w-full flex items-center justify-center">
			<button
				class="i-mdi:latitude h-8 w-20 cursor-pointer"
				on:click|preventDefault={(e) => goto('/')}
			/>
		</section>
	{/if}
	<section class="h-90% w-full flex border-y-1" class:h-96%={isZenMode}>
		<aside class="h-full max-h-full w-20 border-r-1">
			<a href="/" class="nav-btn transition-all" class:active={pathname === '/'}>
				<span class="i-mdi:link h-5 w-5" />
				<span class="text-sm font-semibold uppercase" class:hidden={isZenMode}>rest</span>
			</a>
		</aside>
		<section class="h-full max-h-full w-full flex items-center justify-center">
			<slot />
		</section>
	</section>
	<section class="h-4% w-full">
		<span>t</span>
	</section>
</main>

<style>
	.active {
		--at-apply: border-l-4 border-l-teal-500 bg-zinc-50;
	}
</style>
