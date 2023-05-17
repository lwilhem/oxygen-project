<script lang="ts">
	let msg = 'hello World !'
</script>

<div class="my-4 flex flex-col items-center justify-center">
	<span>{msg}</span>
	<input type="text" bind:value={msg} class="my-4 border-1" />
</div>
