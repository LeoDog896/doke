import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ params }) => {
	return {
		module: await import(`../../lib/tools/${params.tool}/index.ts`)
	};
};
