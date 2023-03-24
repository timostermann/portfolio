<script lang="ts">
	import type { CvItem as CvItemType } from "../types";
	import CvItem from "./CvItem.svelte";
	import TimelineMarker from "./TimelineMarker.svelte";

	export let cvItems: CvItemType[];
</script>

<div class="flex w-full items-center justify-center pr-4">
	<div class="relative grid grid-cols-[32px_1fr] justify-items-center gap-y-16 gap-x-4 sm:gap-x-6">
		{#each cvItems as cvItem}
			<TimelineMarker size="small" />
			<CvItem {cvItem} reverse={false} />
		{/each}
		<div
			class="absolute left-[14px] h-[105%] w-1 rounded-xl bg-gradient-to-b from-amber-500 via-amber-500"
		/>
	</div>
</div>
