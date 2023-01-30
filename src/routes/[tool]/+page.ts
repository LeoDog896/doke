import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ params }) => {
	const module = import.meta.glob(`../../lib/tools/**/*.svelte`, { eager: true })
	const filteredModules = Object.fromEntries(Object.entries(module).filter(([key]) => {
		const folder = key.split('/')[4]
		return folder === params.tool
	}))
	return {
		modules: Object.values(filteredModules)
	};
};
