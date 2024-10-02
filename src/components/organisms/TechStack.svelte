<script lang="ts">
	import AnimateIn from "components/atoms/AnimateIn.svelte";
	import TagPill from "components/atoms/TagPill.svelte";
	import { techStackData } from "data/techStackData";
</script>

<div class="flex w-full max-w-[1000px] flex-col justify-center px-4">
	<AnimateIn className="sm:mx-[108px] mt-32 mb-16">
		<h2 class="mb-4 text-3xl font-medium">Experience</h2>
		<p>
			<span class="inline-block pb-2"
				>To give a better overview of my experience with different technologies, I want to list the
				languages I've used and the most important frameworks and libraries I've worked with. The
				bars should quantify the list items by how much experience I have with each technology.</span
			><span class="font-medium">Note: </span>Since it's difficult to measure one's knowledge of a
			technology against the available knowledge of that technology, I've decided to use a scale
			relative to my best-known technology in each category, which is listed first.
		</p>
	</AnimateIn>
	{#each techStackData as section}
		<AnimateIn
			tag="h3"
			className="ml-[108px] mb-2 text-sm"
			outOfViewClass="translate-y-4 opacity-0"
			inViewClass="translate-y-0 opacity-100">{section.category}</AnimateIn
		>
		<div class="ml-[108px] mb-2 h-px w-[calc(100%-108px)] bg-amber-200" />
		<ul class="mb-16 last:mb-0">
			{#each section.technologies as technology}
				<li class="mb-5 grid grid-cols-[100px_1fr] items-center justify-items-end gap-x-2">
					<TagPill tag={technology.name} />
					<AnimateIn
						className="relative h-4 origin-left justify-self-start rounded-[0_50px_50px_0] bg-gradient-to-r from-violet-500 to-amber-500 pr-6"
						style={`width: ${technology.experience}%`}
						inViewClass="scale-x-100"
						outOfViewClass="scale-x-0"
						margin={-50}
					>
						<span class="sr-only">Relative experience: {technology.experience}%</span>
					</AnimateIn>
				</li>
			{/each}
		</ul>
	{/each}
</div>
