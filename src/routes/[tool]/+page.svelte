<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.modules as module}
	<svelte:component this={module.default} />
{/each}
