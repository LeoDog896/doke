import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ params }) => {
	const files = import.meta.glob("../../lib/tools/**/*.svelte");

	const filteredFiles = Object.entries(files).filter(([key, _]) => key.includes(params.tool))

	return {
		components: filteredFiles
	}
};