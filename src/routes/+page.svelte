<script lang="ts">
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<figure class="img-bg" />
		<div class="card m-4 p-4 gird grid-cols-1">
			<h3 class="card-header h3">Host or Join Game?</h3>
			<hr />
			<br />
			<div class="flex">
				<a href="/host" class="btn variant-filled-primary w-full m-2 card-hover">Host </a>
			</div>
			<div class="flex">
				<a href="/join" class="btn variant-filled-secondary w-full m-2 card-hover">Join</a>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure,
	.img-bg {
		@apply w-80 h-80 md:w-96 md:h-96;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
