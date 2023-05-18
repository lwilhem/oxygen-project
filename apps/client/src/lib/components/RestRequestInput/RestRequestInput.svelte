<script lang="ts">
	import { dropdown } from '$lib/components'

	let http_method = 'GET'
	let url = 'https://echo.hoppscotch.io'

	const request = async () => {
		const request = await fetch(url, { method: http_method })
		const response = await request.text()
		console.log(response)
	}
</script>

<div class="h-10 w-full flex items-center justify-between px-6">
	<div class="h-8 w-3/4 flex items-center justify-center">
		<button
			use:dropdown={{ values: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'] }}
			class="h-full w-40 flex items-center justify-between rounded-l-md px-4"
			border="1 zinc-300 r-none dark:zinc-700"
			bg="zinc-100 dark:zinc-600"
			text="zinc-900 dark:zinc-100"
		>
			<span class="font-semibold">{http_method}</span>
			<span class="i-mdi:chevron-down h-6 w-6" />
		</button>
		<input
			type="text"
			class="h-full w-full rounded-r-md px-6"
			outline="focus:none"
			border="1 zinc-300 dark:zinc-700"
			bg="zinc-100 dark:zinc-900"
			text="zinc-900 dark:zinc-100"
			font="mono light"
			bind:value={url}
		/>
	</div>

	<div class="h-8 w-1/4 flex items-center justify-center pl-2">
		<button
			class="h-full w-full rounded-md transition-all"
			bg="teal-400 hover:teal-500"
			text="zinc-100"
			on:click|preventDefault={request}
		>
			send
		</button>
	</div>
</div>
