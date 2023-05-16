<script lang="ts">
	import { page } from '$app/stores'
</script>

<aside class="h-full w-22 border-r-1">
	<a
		href="/"
		class="h-22 w-full flex flex-col items-center justify-evenly py-3"
		class:active_link={$page.url.pathname === '/'}
	>
		<span class="i-mdi:link h-5 w-5 text-zinc-700" />
		<span class="text-sm font-semibold text-zinc-700">REST</span>
	</a>
</aside>
<slot name="selected_api" />

<style>
	.active_link {
		--at-apply: border-l-2 border-teal-500 bg-zinc-100;
	}
</style>
