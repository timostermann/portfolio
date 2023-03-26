<script lang="ts">
	import { getCopyrightText } from "utils/copyrightText";
	import Linkedin from "../svg/LinkedIn.svelte";
	import Noise from "../svg/Noise.svelte";
	import Xing from "../svg/Xing.svelte";
</script>

<footer class="relative mt-2 flex h-52 w-full items-end">
	<div class="absolute inset-0 z-0 object-cover">
		<Noise />
	</div>
	<div class="absolute inset-0 z-10 bg-gradient-to-b from-primary-900 to-[#1C161ECC]" />
	<div
		class="z-20 flex h-24 w-full items-center justify-between bg-primary-900 bg-opacity-80 px-6 text-sm font-extralight"
	>
		<ul class="flex list-none gap-6">
			<li>
				<a
					href="https://www.xing.com/profile/Tim_Ostermann13/cv"
					target="_blank"
					rel="noreferrer"
					title="Xing"
					class="cursor-pointer"><Xing /></a
				>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/tim-ostermann-b52a501a1/"
					target="_blank"
					rel="noreferrer"
					title="LinkedIn"
					class="cursor-pointer"><Linkedin /></a
				>
			</li>
		</ul>
		<p>{getCopyrightText()}</p>
	</div>
</footer>
