<script lang="ts">
	import type { CvItem as CvItemType } from "../../types";
	import CvItem from "../molecules/CvItem.svelte";
	import TimelineMarker from "../atoms/TimelineMarker.svelte";
	import AnimateIn from "components/atoms/AnimateIn.svelte";

	export let cvItems: CvItemType[];
</script>

<div class="relative z-20 flex w-full items-center justify-center px-4">
	<div
		class="relative grid grid-cols-[32px_1fr] justify-items-center gap-y-16 gap-x-4 sm:gap-x-6 xl:hidden"
	>
		{#each cvItems as cvItem, index}
			<TimelineMarker size={index === 0 ? "large" : "small"} />
			<CvItem {cvItem} reverse={false} />
		{/each}
		<AnimateIn
			className="absolute left-[14px] origin-top h-[105%] w-1 rounded-xl bg-gradient-to-b from-amber-500 via-amber-500"
			inViewClass="scale-y-100"
			outOfViewClass="scale-y-0"
			setupClass="transition-transform duration-[3s] ease-in"
		/>
	</div>
	<div class="relative hidden grid-cols-[1fr_32px_1fr] justify-items-center gap-x-6 xl:grid">
		{#each cvItems as cvItem, index}
			{#if index % 2 === 0}
				<div />
				<TimelineMarker size={index === 0 ? "large" : "small"} />
				<CvItem {cvItem} reverse={false} />
			{:else}
				<CvItem {cvItem} reverse={true} />
				<TimelineMarker size="small" />
				<div />
			{/if}
		{/each}
		<AnimateIn
			className="absolute left-0 right-0 origin-top mx-auto h-[105%] w-1 rounded-xl bg-gradient-to-b from-amber-500 via-amber-500"
			inViewClass="scale-y-100"
			outOfViewClass="scale-y-0"
			setupClass="transition-transform duration-[3s] ease-in"
		/>
	</div>
</div>
