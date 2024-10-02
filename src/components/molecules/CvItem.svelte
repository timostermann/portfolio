<script lang="ts">
	import cn from "classnames";
	import type { CvItem } from "../../types";
	import SvelteMarkdown from "svelte-markdown";
	import TagPill from "../atoms/TagPill.svelte";
	import AnimateIn from "components/atoms/AnimateIn.svelte";
	import { sanitizeString } from "utils/sanitizeString";

	export let cvItem: CvItem;
	export let reverse: boolean;
	export let idPrefix = "";

	const id = sanitizeString(`cv-item-${idPrefix}-${cvItem.title}-${cvItem.date}`);
</script>

<AnimateIn
	tag="article"
	ariaLabelledby={id}
	className={cn(
		"flex max-w-md flex-col gap-1 text-base font-thin",
		reverse ? "items-end text-end" : "items-start"
	)}
>
	<h2 class="text-xl font-medium" {id}>{cvItem.title}</h2>
	<p class="-order-1">{cvItem.date}</p>
	<p class={cn("markdown mt-1 flex flex-col gap-2", { "items-end": reverse })}>
		<SvelteMarkdown source={cvItem.description} isInline />
	</p>
	<ul class={cn("mt-3 flex flex-wrap gap-2", { "justify-end": reverse })}>
		{#each cvItem.technologies as tag}
			<li><TagPill {tag} /></li>
		{/each}
	</ul>
</AnimateIn>
