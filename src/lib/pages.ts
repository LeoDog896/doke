/**
 * Returns absolute paths to pages included in the modules
 *
 * @param url - import.meta.url
 * @param modules - import.meta.glob();
 * @returns Paths to pages excluding routes with dynamic parameters
 */
export const getPages = (url: string, modules: Record<string, unknown>): string[] => {
	const paths = Object.keys(modules)
		.filter((path) => path != './+page.svelte')
		.map((path) => path.replace(/\/\+page\.svelte/, ''))
		.map((path) => path.replace(/\.\//, ''));

	return paths;
};
