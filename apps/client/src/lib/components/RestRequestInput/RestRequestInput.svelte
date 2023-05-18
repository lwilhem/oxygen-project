<script lang="ts">
	let http_method = 'GET'
	let url = 'https://echo.hoppscotch.io'

	const request = async () => {
		const request = await fetch(url, { method: http_method })
		const response = await request.text()
		console.log(response)
	}
</script>

<div class="h-10 w-full flex items-center justify-center" text="zinc-900">
	<div class="h-8 w-3/4 flex items-center justify-center">
		<button
			class="h-full w-40 flex items-center justify-between rounded-l-md px-4"
			border="1 zinc-300 r-none"
		>
			<span class="font-semibold">{http_method}</span>
			<span class="i-mdi:chevron-down h-6 w-6" />
		</button>
		<input
			type="text"
			class="h-full w-full rounded-r-md px-6"
			outline="focus:none"
			font="mono light"
			bind:value={url}
		/>
	</div>

	<div>
		<button on:click|preventDefault={request}> request </button>
	</div>
</div>
