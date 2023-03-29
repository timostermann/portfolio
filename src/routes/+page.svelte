<script lang="ts">
	import stage from "assets/stage.webp";
	import stageLg from "assets/stage-lg.webp";
	import stageXl from "assets/stage-xl.webp";
	import Cv from "components/organisms/Cv.svelte";
	import AnimateIn from "components/atoms/AnimateIn.svelte";
	import { cvItems } from "data/cvData";
	import TechStack from "components/organisms/TechStack.svelte";
</script>

<svelte:head>
	<title>About | Tim Ostermann</title>
	<meta name="description" content="About Tim Ostermann" />
	<meta property="og:title" content="About | Tim Ostermann" />
	<meta property="og:description" content="About Tim Ostermann" />
	<meta property="og:url" content="https://timostermann.com/" />
</svelte:head>
<section class="relative">
	<picture class="relative">
		<p class="absolute bottom-2 right-2 text-[10px] opacity-20">Created with Midjourney</p>
		<source srcset={stageXl} media="(min-width: 1500px)" />
		<source srcset={stageLg} media="(min-width: 1100px)" />
		<img src={stage} alt="Laptop on a desk" class="h-screen max-h-[1600px] w-full object-cover " />
	</picture>
	<div class="absolute inset-0 z-20 flex items-center justify-center">
		<div
			class="flex w-full -translate-y-10 flex-col rounded-md p-4 drop-shadow-md xs:w-[400px] sm:w-[464px] sm:p-8"
			style="background: radial-gradient(circle, rgba(26,18,57,1) 0%, rgba(26,18,57,0) 80%)"
		>
			<AnimateIn tag="h1" className="mb-4 text-4xl font-semibold" margin={0}>
				<span class="font-extralight">Hi, I'm </span>Tim!
			</AnimateIn>
			<AnimateIn tag="p" margin={0}>
				<span class="inline-block pb-2"
					>I'm a front-end developer with an eye for good design and a heart for clean code moving
					towards the goal of becoming true fullstack.</span
				>
				<span class="inline-block pb-4"
					>I'm based in Nuremberg and currently working remotely for
					<a class="text-link" href="https://i22.de" target="_blank" rel="noreferrer"
						>i22 Digitalagentur</a
					>.</span
				>
				If you want to get in contact, check out
				<a
					class="text-link"
					href="https://www.xing.com/profile/Tim_Ostermann13/cv"
					target="_blank"
					rel="noreferrer">Xing</a
				>
				or
				<a
					class="text-link"
					href="https://www.linkedin.com/in/tim-ostermann-b52a501a1/"
					target="_blank"
					rel="noreferrer">LinkedIn</a
				>.
			</AnimateIn>
		</div>
	</div>
</section>
<section class="bg-gradient-to-b from-primary-900 to-primary-500 pt-24">
	<Cv {cvItems} />
</section>
<section class="flex justify-center bg-gradient-to-b from-primary-500 to-primary-900 pt-24">
	<TechStack />
</section>
