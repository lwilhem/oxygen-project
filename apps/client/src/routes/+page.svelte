<script lang="ts">
	import { DarkModeToggle } from '$lib/components'

	let msg = 'hello World !'
</script>

<span>{msg}</span>
<div class="px-2 py-1" bg="white">
	<input
		type="text"
		bind:value={msg}
		on:input={() => console.log(msg)}
		text="zinc-900"
		border="1 zinc-300"
	/>
</div>
<DarkModeToggle />
