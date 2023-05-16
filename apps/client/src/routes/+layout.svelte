<script lang="ts">
	import { Pane, Splitpanes } from 'svelte-splitpanes'
	import '../app.css'
</script>

<svelte:head>
	<title>Oxygen - API Devtool</title>
	<meta name="description" content="dev build oxygen" />
</svelte:head>

<main class="h-screen max-h-screen min-h-screen w-screen">
	<Splitpanes horizontal class="no-splitter" dblClickSplitter={false}>
		<Pane minSize={8} maxSize={8} size={8}>
			<div class="h-full w-full flex items-center justify-between px-6 text-zinc-950">
				<span class="text-sm font-bold uppercase">Oxygen</span>
			</div>
		</Pane>
		<Pane class="border-y-1">
			<!-- Display on pane element-->
			<slot />
		</Pane>
		<Pane size={4} minSize={4} maxSize={4}>
			<span>Footer</span>
		</Pane>
	</Splitpanes>
</main>

<style uno:preflights uno:safelist global>
	:global(.no-splitter .splitpanes__splitter) {
		--at-apply: hidden;
	}

	:global(.no-splitter.splitpanes--vertical > .splitpanes__splitter) {
		--at-apply: w-0;
		--at-apply: pointer-events-none;
	}

	:global(.no-splitter.splitpanes--horizontal > .splitpanes__splitter) {
		--at-apply: h-0;
		--at-apply: pointer-events-none;
	}
</style>
