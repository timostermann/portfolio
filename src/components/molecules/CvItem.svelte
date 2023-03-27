<script lang="ts">
	import cn from "classnames";
	import type { CvItem } from "../../types";
	import SvelteMarkdown from "svelte-markdown";
	import TagPill from "../atoms/TagPill.svelte";
	import AnimateIn from "components/atoms/AnimateIn.svelte";

	export let cvItem: CvItem;
	export let reverse: boolean;
</script>

<AnimateIn
	tag="div"
	className={cn(
		"flex max-w-md flex-col gap-1 text-base font-thin",
		reverse ? "items-end text-end" : "items-start"
	)}
>
	<p>{cvItem.date}</p>
	<h2 class="text-xl font-medium">{cvItem.title}</h2>
	<p class={cn("markdown mt-1 flex flex-col gap-2", { "items-end": reverse })}>
		<SvelteMarkdown source={cvItem.description} isInline />
	</p>
	<div class={cn("mt-3 flex flex-wrap gap-2", { "justify-end": reverse })}>
		{#each cvItem.technologies as tag}
			<TagPill {tag} />
		{/each}
	</div>
</AnimateIn>
