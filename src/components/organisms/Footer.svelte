<script lang="ts">
	import { footerLinks } from "data/footerLinks";
	import { getCopyrightText } from "utils/copyrightText";
</script>

<footer class="relative mt-2 flex h-52 w-full items-end">
	<div class="absolute inset-0 z-10 bg-gradient-to-b from-primary-900 to-[#1C161ECC]" />
	<div
		class="z-20 flex h-24 w-full items-center justify-between bg-primary-900 bg-opacity-80 px-6 text-sm font-extralight"
	>
		<ul class="flex list-none gap-4 sm:gap-6">
			{#each footerLinks as link}
				<li>
					<a
						href={link.href}
						target="_blank"
						rel="noreferrer"
						class="block h-6 w-6 cursor-pointer transition-transform hover:scale-110 sm:h-8 sm:w-8"
					>
						<svelte:component this={link.icon} />
						<span class="sr-only">{link.title}</span>
					</a>
				</li>
			{/each}
		</ul>
		<p>{getCopyrightText()}</p>
	</div>
</footer>
