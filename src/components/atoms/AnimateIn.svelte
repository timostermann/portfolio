<script lang="ts">
	import cn from "classnames";
	import { onMount } from "svelte";

	export let className = "";
	export let tag = "div";
	export let margin = -200;
	export let once = true;

	let intersecting = false;
	let container: HTMLElement;

	onMount(() => {
		if (typeof IntersectionObserver !== "undefined") {
			const rootMargin = `0px 0px ${margin}px 0px`;

			const observer = new IntersectionObserver(
				(entries) => {
					intersecting = entries[0].isIntersecting;
					if (intersecting && once) {
						observer.unobserve(container);
					}
				},
				{
					rootMargin
				}
			);

			observer.observe(container);
			return () => observer.unobserve(container);
		}

		function handler() {
			const bcr = container.getBoundingClientRect();
			intersecting =
				bcr.bottom > 0 &&
				bcr.right > 0 &&
				bcr.top - margin < window.innerHeight &&
				bcr.left < window.innerWidth;

			console.log(intersecting);

			if (intersecting && once) {
				window.removeEventListener("scroll", handler);
			}
		}

		window.addEventListener("scroll", handler);
		return () => window.removeEventListener("scroll", handler);
	});
</script>

<svelte:element
	this={tag}
	bind:this={container}
	class={cn(
		className,
		"transition-[opacity,transform] duration-1000",
		intersecting ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
	)}
>
	<slot />
</svelte:element>
