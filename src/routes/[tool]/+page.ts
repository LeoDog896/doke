export const load = async ({ params }) => {
	return {
		module: await import(`../../lib/tools/${params.tool}/index.ts`)
	};
};
