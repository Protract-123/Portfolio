<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="h-fit">
	<div class="w-full h-full">
		<div class="pt-5 pb-5">
			<div class="pb-5 h-fit w-fit bg-miami-pink rounded-2xl blog-shadow">
				<div>
					<img class="rounded-t-2xl" src="https://placehold.co/450x300" alt=""/>
				</div>
				<div class="pl-1 pt-1">
					<h3 class="text-lg">Very Epic Blog Post</h3>
					<p>Very Epic Blog Description</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	:root {
		/* Lavender */
		--primary-stripe-rgb: 220 175 255;
		/* Brown */
		--secondary-stripe-rgb: 185 165 170;
	}

  .blog-shadow {
		box-shadow: 10px 10px 5px rgb(0 0 0 / 20%);
	}

	@keyframes pan-bg {
		0% {
			background-position: 0% 0%;
		}
		100% {
			background-position: 100% 0%;
		}
	}
</style>
