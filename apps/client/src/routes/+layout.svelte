<script lang="ts">
	import { CoreLayout } from '$lib/components'
	import { Pane, Splitpanes } from 'svelte-splitpanes'
	import '../app.css'
</script>

<svelte:head>
	<title>Oxygen - API Devtool</title>
	<meta name="description" content="dev build oxygen" />
</svelte:head>

<main class="h-screen max-h-screen min-h-screen w-screen flex flex-col items-center justify-center">
	<Splitpanes horizontal class="no-splitter" dblClickSplitter={false}>
		<Pane minSize={8} maxSize={8} size={8}>
			<div class="h-full w-full flex items-center justify-between bg-zinc-200 px-6 text-zinc-950">
				<span class="text-sm font-bold uppercase">Oxygen</span>
			</div>
		</Pane>
		<Pane class="flex items-center justify-center border-y-1">
			<CoreLayout>
				<slot slot="selected_api" />
			</CoreLayout>
		</Pane>
		<Pane size={4} minSize={4} maxSize={4}>
			<div class="h-full w-full bg-zinc-200">
				<span class="text-zinc-200">t</span>
			</div>
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
