<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
	import { onMount } from 'svelte';

	//Funny Dot Thing (Way too complicated)
	onMount(() => {
		let element = document.getElementById('hoverOption1');
		if (element != null) {
			element.addEventListener('mouseover', (event) => {
				addDots(element);
			});
			element.addEventListener('mouseout', () => {
				removeDots();
			});
		}

		let element2 = document.getElementById('hoverOption2');
		if (element2 != null) {
			element2.addEventListener('mouseover', (event) => {
				addDots(element2);
			});
			element2.addEventListener('mouseout', () => {
				removeDots();
			});
		}
	});

	let pageLoaded: boolean = false;
	let timerId: number = 0;

	function addDots(element: HTMLElement | null) {
		timerId = setInterval(updateWord, 1000);
		let i = 0;
		let originalText = element?.innerText;
		function updateWord() {
			if (element != null) {
				if (i >= 3) {
					if (originalText != null) {
						element.innerText = originalText;
					}
					i = 0;
				} else {
					element.innerText += '.';
					i++;
				}
			}
		}
	}

	function removeDots() {
		clearInterval(timerId);
	}
	//displayWord();
</script>

<div>
	{#if !pageLoaded}
		<section class="h-dvh">
			<div class="w-full stripe-pattern">
				<!-- Load Website -->
				<div
					class="bg-miami-pink rounded-2xl blog-shadow w-fit h-fit absolute left-0 right-0 top-0 bottom-0 m-auto hover:scale-105 transition-all"
				>
					<h3 class="text-8xl text-center m-3 font-monofett">Load Website?</h3>

					<div class="flex w-full justify-around mb-3">
						<button
							id="hoverOption1"
							on:click={() => {
								pageLoaded = true;
							}}
							class="font-vt323 text-5xl">Sure</button
						>
						<button id="hoverOption2" class="font-vt323 text-5xl">Nope</button>
					</div>
				</div>
			</div>
		</section>
	{:else}
		<Header></Header>
		<slot />
	{/if}
</div>

<style lang="postcss">
	:root {
		/* Lavender */
		--primary-stripe-rgb: 220 175 255;
		/* Brown */
		--secondary-stripe-rgb: 185 165 170;
	}

	.stripe-pattern {
		height: 100%;
		width: 100%;
		background-size: 18px 18px;
		background-image: linear-gradient(
			-45deg,
			rgb(var(--primary-stripe-rgb)) 25%,
			rgb(var(--secondary-stripe-rgb)) 25%,
			rgb(var(--secondary-stripe-rgb)) 50%,
			rgb(var(--primary-stripe-rgb)) 50%,
			rgb(var(--primary-stripe-rgb)) 75%,
			rgb(var(--secondary-stripe-rgb)) 75%,
			rgb(var(--secondary-stripe-rgb)) 100%
		);
		/* box-shadow: inset 0rem 0.5rem 2rem 0.25rem rgb(0 0 0 / 40%); */
		animation: pan-bg 360s linear infinite;
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
