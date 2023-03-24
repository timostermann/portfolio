<script lang="ts">
	import Footer from "components/Footer.svelte";
	import Navigation from "components/Navigation.svelte";
	import { onMount } from "svelte";
	import "../app.css";

	let spotlight: HTMLDivElement;

	onMount(() => {
		window.addEventListener("mousemove", (e) => {
			spotlight.style.left = `${e.pageX - spotlight.clientWidth / 2}px`;
			spotlight.style.top = `${e.pageY - spotlight.clientHeight / 2}px`;
		});
	});
</script>

<Navigation />
<main class="relative">
	<slot />
	<div
		bind:this={spotlight}
		class="absolute z-50 h-96 w-96 rounded-full bg-gradient-radial from-[rgb(255_251_235_/_0.2)] to-transparent opacity-5"
	/>
</main>
<Footer />
