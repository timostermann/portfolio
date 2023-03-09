<script lang="ts">
	import stage from "assets/stage.png";
	import stageLg from "assets/stage-lg.png";
	import stageXl from "assets/stage-xl.png"; // TODO: center xl image
</script>

<div class="relative">
	<picture>
		<source srcset={stageXl} media="(min-width: 1500px)" />
		<source srcset={stageLg} media="(min-width: 1100px)" />
		<img src={stage} alt="Laptop on a desk" class="h-screen w-full object-cover " />
	</picture>
	<div class="absolute inset-0 z-[2] flex items-center justify-center">
		<div class="flex w-full -translate-y-10 flex-col px-4 drop-shadow-md xs:w-[400px]">
			<h1 class="mb-4 text-4xl font-semibold">
				<span class="font-extralight">Hi, ich bin </span>Tim!
			</h1>
			<p>
				<span class="inline-block pb-2"
					>I'm a front-end developer with an eye for good design and a heart for clean code moving
					towards the goal of becoming true fullstack.</span
				>
				<span class="inline-block pb-4"
					>I'm based in Nuremberg and currently working remotely for
					<a
						class="font-semibold text-amber-500 transition-colors hover:text-amber-600"
						href="https://i22.de"
						target="_blank"
						rel="noreferrer">i22 Digitalagentur</a
					>.</span
				>
				If you want to get in contact, check out
				<a
					class="font-semibold text-amber-500 transition-colors hover:text-amber-600"
					href="https://www.xing.com/profile/Tim_Ostermann13/cv"
					target="_blank"
					rel="noreferrer">Xing</a
				>
				or
				<a
					class="font-semibold text-amber-500 transition-colors hover:text-amber-600"
					href="https://www.linkedin.com/in/tim-ostermann-b52a501a1/"
					target="_blank"
					rel="noreferrer">LinkedIn</a
				>.
			</p>
		</div>
	</div>
</div>
