<script lang="ts">
	import { page } from '$app/stores';
	import github from '$lib/images/github-mark-white.png';
	import youtube from '$lib/images/youtube_social_circle_dark.png';
</script>

<header class="bg-denim text-white pr-5 pl-5 pt-2 pb-2">
	<nav class="flex justify-center">
		<ul class="flex justify-center mr-auto">
			<li class="flex justify-center content-center">
				<p class="w-min h-min block m-auto">Test</p>
			</li>
			<li class="flex justify-center content-center">
				<p class="w-min h-min block m-auto">Test</p>
			</li>
		</ul>

		<ul class="flex justify-center">
			<li
				class="aria-[current]:underline mr-3 ml-3 flex justify-center content-center"
				aria-current={$page.url.pathname === '/' ? 'page' : undefined}
			>
				<a class="w-min h-min block m-auto" href="/">Home</a>
			</li>
			<li
				class="aria-[current]:underline mr-3 ml-3 flex justify-center content-center"
				aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
			>
				<a class="w-min h-min block m-auto" href="/about">About</a>
			</li>
			<li
				class="aria-[current]:underline mr-3 ml-3 flex justify-center content-center"
				aria-current={$page.url.pathname.startsWith('/projects') ? 'page' : undefined}
			>
				<a class="w-min h-min block m-auto" href="/projects">Projects</a>
			</li>
		</ul>

		<ul class="flex justify-center ml-auto">
			<li>
				<a href="https://github.com/Protract-123"
					><img
						class="w-10 p-1 h-10 hover:p-0 mr-3 transition-all"
						src={github}
						alt="Github Icon"
					/></a
				>
			</li>
			<li>
				<a href="https://www.youtube.com/channel/UCYxkDVrZmMrEG8sAY2ZOwVg"
					><img
						class="w-10 p-1 h-10 hover:p-0 mr-3 transition-all"
						src={youtube}
						alt="YouTube Icon"
					/></a
				>
			</li>
		</ul>
	</nav>
</header>
