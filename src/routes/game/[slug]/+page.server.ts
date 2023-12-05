import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	// players are redirected here after they join a game,
	/*
			The goal of this page is to load more data and prepare to send players to the proper game screen

	*/
	return {};
}) satisfies PageServerLoad;
