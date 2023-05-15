<script lang="ts">
	import '../app.css'
</script>

<svelte:head>
	<title>Oxygen - API Devtool</title>
	<meta name="description" content="dev build oxygen" />
</svelte:head>

<main class="h-screen w-screen flex items-center justify-center">
	<slot />
</main>

<style uno:preflights uno:safelist global></style>
