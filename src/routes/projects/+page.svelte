<script lang="ts">
	import AnimateIn from "components/atoms/AnimateIn.svelte";
	import ProjectTile from "components/molecules/ProjectTile.svelte";
	import ShapeCanvas from "components/organisms/ShapeCanvas.svelte";
	import { projects } from "data/projectData";
</script>

<svelte:head>
	<title>Projects | Tim Ostermann</title>
	<meta name="description" content="Tim Ostermann's Projects" />
	<meta property="og:title" content="Projects | Tim Ostermann" />
	<meta property="og:description" content="Tim Ostermann's Projects" />
	<meta property="og:url" content="https://timostermann.com/projects" />
</svelte:head>
<section
	class="relative flex flex-col items-center bg-gradient-to-b from-primary-900 via-primary-500 to-primary-900 px-8 pt-24"
>
	<div class="absolute inset-0 z-[5]">
		<ShapeCanvas />
	</div>
	<div class="z-20 w-[700px] max-w-full sm:p-6">
		<AnimateIn tag="h1" className="mb-4 text-4xl font-extralight" margin={0}
			>Project Overview</AnimateIn
		>
		<AnimateIn tag="p" margin={0}>
			<span class="inline-block pb-4">
				Here I want to give a short overview about my (private) projects.
			</span>
			<span class="inline-block pb-4">
				For compliance reasons, I won't include any projects I did for clients. These are only
				projects I did for for fun and/or to try out new technologies.
			</span>
			I hope the list still gives you a good overview of my skills (and why I'd rather work with a talented
			designer than rely on my own design skills). You can also check out the source code on my GitHub
			and find out, that I have a lot of READMEs yet to write...
		</AnimateIn>
	</div>
	<div class="z-20 mt-12 flex w-[700px] max-w-full flex-col items-center gap-8">
		{#each projects as project}
			<ProjectTile {project} />
		{/each}
	</div>
</section>
