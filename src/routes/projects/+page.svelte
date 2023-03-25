<script lang="ts">
	import ProjectTile from "components/ProjectTile.svelte";
</script>

<section
	class="relative flex flex-col items-center bg-gradient-to-b from-primary-900 via-primary-500 to-primary-900 px-8 pt-24"
>
	<div class="w-[500px] max-w-full">
		<h1 class="mb-4 text-4xl font-extralight">Project Overview</h1>
		<p>
			<span class="inline-block pb-4"
				>Here I want to give a short overview about my (private) projects.</span
			>
			<span class="inline-block pb-4"
				>For compliance reasons, I won't include any projects I did for clients in my work. These
				are only projects I did for for fun and/or to try out new technologies.</span
			>
			I hope the list still gives you a good overview of my skills (and why I'd rather work with a talented
			designer than rely on my own design skills). You can also check out the source code on my GitHub
			and find out, that I have a lot of READMEs yet to write...
		</p>
	</div>
	<div class="mt-12 flex w-[700px] max-w-full flex-col items-center gap-8">
		<ProjectTile />
	</div>
</section>
