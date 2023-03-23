<script lang="ts">
	import cn from "classnames";
	import type { CvItem } from "../types";
	import SvelteMarkdown from "svelte-markdown";
	import TagPill from "./TagPill.svelte";

	export let cvItem: CvItem;
	export let reverse: boolean;
</script>

<div
	class={cn(
		"flex max-w-md flex-col gap-1 text-base font-thin",
		reverse ? "items-end text-end" : "items-start"
	)}
>
	<p class="text-sm">{cvItem.date}</p>
	<h2 class="text-xl font-medium">{cvItem.title}</h2>
	<p class="markdown mt-1 flex flex-col gap-2">
		<SvelteMarkdown source={cvItem.description} isInline />
	</p>
	<div class="mt-3 flex flex-wrap gap-2">
		{#each cvItem.technologies as tag}
			<TagPill {tag} />
		{/each}
	</div>
</div>
