<script lang="ts">
	import cn from "classnames";
	import { onDestroy, onMount } from "svelte";

	export let className = "";
	export let inViewClass = "translate-y-0 opacity-100";
	export let outOfViewClass = "translate-y-24 opacity-0";
	export let setupClass = "transition-[opacity,transform] duration-1000";
	export let tag = "div";
	export let margin = -200;
	export let once = true;
	export let style = "";

	let intersecting = false;
	let initiallyAbove = false;
	let container: HTMLElement;
	let observer: IntersectionObserver;

	onMount(() => {
		const { top } = container.getBoundingClientRect();
		if (top < 0) initiallyAbove = true;

		if (typeof IntersectionObserver !== "undefined") {
			const rootMargin = `0px 0px ${margin}px 0px`;

			observer = new IntersectionObserver(
				(entries) => {
					intersecting = initiallyAbove || entries[0].isIntersecting;
					if (intersecting && once) {
						observer.unobserve(container);
					}
				},
				{
					rootMargin
				}
			);

			observer.observe(container);
		}
	});

	onDestroy(() => {
		if (observer) observer.disconnect();
	});
</script>

<svelte:element
	this={tag}
	bind:this={container}
	class={cn(className, setupClass, intersecting ? inViewClass : outOfViewClass)}
	{style}
>
	<slot />
</svelte:element>
