import type { Actions, PageServerLoad } from './$types';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
const joinGameSchema = z.object({
	gameCode: z.string().length(6, 'Invalid join code'),
	username: z.string().max(22, 'Nickname too long').min(1, 'Nickname too short')
});

export const load = (async () => {
	// Server API:
	const form = await superValidate(joinGameSchema);

	// Unless you throw, always return { form } in load and form actions.
	return { form };
}) satisfies PageServerLoad;
export const actions: Actions = {
	joinGame: async ({ request }) => {
		const form = await superValidate(request, joinGameSchema);
		if (!form.valid) return setError(form, 'Invalid join code or Nickname');
	}
};
