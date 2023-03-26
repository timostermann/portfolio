<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";
	import type { Project } from "../../types";
	import Github from "../svg/Github.svelte";
	import TagPill from "../atoms/TagPill.svelte";

	export let project: Project;
</script>

<article
	class="flex w-full flex-col gap-4 rounded-xl bg-gradient-to-br from-[rgb(254_178_30_/_0.2)] to-[rgb(254_178_30_/_0.4)] p-4 text-base font-thin shadow-[0_4px_30px_rgb(0_0_0_/_0.1)] backdrop-blur-md sm:p-6"
>
	<div class="flex w-full flex-col justify-between gap-2 sm:flex-row sm:items-center">
		<h2 class="text-xl font-medium">{project.title}</h2>
		<p>{project.date}</p>
	</div>
	<p class="markdown flex flex-col gap-2">
		<SvelteMarkdown source={project.description} isInline />
		{#if project.link}
			<a
				href={project.link}
				target="_blank"
				rel="noreferrer"
				title={project.title}
				class="cursor-pointer">See result</a
			>
		{/if}
	</p>
	<div class="flex w-full justify-between gap-2">
		<div class="flex flex-wrap gap-2">
			{#each project.technologies as tag}
				<TagPill {tag} />
			{/each}
		</div>
		<div class="flex flex-wrap gap-2">
			<a
				href={project.source}
				target="_blank"
				rel="noreferrer"
				title="GitHub"
				class="h-8 w-8 cursor-pointer transition-transform hover:scale-110"><Github /></a
			>
		</div>
	</div>
</article>
