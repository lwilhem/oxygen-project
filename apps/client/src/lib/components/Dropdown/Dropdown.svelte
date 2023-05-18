<script lang="ts">
	export let values: string[]
</script>

<div class="flex flex-col items-center justify-center">
	{#each values as value}
		<button>{value}</button>
	{/each}
</div>
