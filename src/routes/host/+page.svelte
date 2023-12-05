<script lang="ts">
	import { ProgressBar } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h3 class="h3">Please wait while we build a lobby</h3>
		<ProgressBar value={undefined} />
	</div>
</div>
