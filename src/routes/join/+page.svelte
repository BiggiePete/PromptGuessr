<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: PageData;

	// Client API:
	const { form, constraints, errors, enhance } = superForm(data.form);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<figure class="img-bg" />
		<div class="card m-4 p-4 gird grid-cols-1">
			<h3 class="card-header h3">Join Game</h3>
			<hr />
			<br />
			<form use:enhance method="post" action="?/joinGame">
				<label class="label m-2">
					<span class="float-left">NickName</span>
					<input
						class={$errors.username ? 'input input-error' : 'input'}
						type="text"
						name="username"
						id="username"
						bind:value={$form.username}
						{...$constraints.username}
					/>
					{#if $errors.username}
						<span class="badge variant-filled-error">{$errors.username}</span>
					{/if}
				</label>
				<label class="label m-2">
					<span class="float-left">Join Code</span>
					<input
						class={$errors.gameCode ? 'input input-error' : 'input'}
						type="text"
						name="gameCode"
						id="gameCode"
						bind:value={$form.gameCode}
						{...$constraints.gameCode}
					/>
					{#if $errors.gameCode}
						<span class="badge variant-filled-error">{$errors.gameCode}</span>
					{/if}
				</label>
				<br />
				<hr />
				<button type="submit" class="btn variant-filled-primary">Join</button>
			</form>
		</div>
	</div>
</div>
