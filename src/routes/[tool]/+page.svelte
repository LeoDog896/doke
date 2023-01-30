<script lang="ts">
	import { page } from '$app/stores';
	
	const modules = import.meta.glob(`../../lib/tools/**/*.svelte`)

	const filteredModules = Object.entries(modules).filter(([key, _]) => key.includes($page.params.tool))
</script>

{#each filteredModules as [key, value]}
	{#await value()}
		<p>...</p>
	{:then Component}
		<svelte:component this={Component.default} />
	{/await}
{/each}