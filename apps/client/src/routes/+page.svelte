<script lang="ts">
	import { browser } from '$app/environment'
	import { add } from '@oxygen/core'
	import { onMount } from 'svelte'

	onMount(() => {
		if (browser) console.log(add(1, 5))
	})
</script>

<span>hello World !</span>
