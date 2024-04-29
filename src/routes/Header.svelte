<script>
	import { page } from '$app/stores';
</script>

<header class="bg-denim text-white p-5">
	<nav>
		<ul class="flex justify-center">
			<li class="aria-[current]:underline mr-3 ml-3" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li class="aria-[current]:underline mr-3 ml-3" aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li class="aria-[current]:underline mr-3 ml-3" aria-current={$page.url.pathname.startsWith('/projects') ? 'page' : undefined}>
				<a href="/projects">Projects</a>
			</li>
		</ul>
	</nav>
</header>