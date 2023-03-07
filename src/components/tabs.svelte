<script lang="ts">
	import type { NavItem } from "../types";
	import cn from "classnames";
	import { onMount } from "svelte";

	export let tabItems: NavItem[];

	let activeTabIndex = 0;
	let tabElements: HTMLDivElement[] = Array(tabItems.length).fill(null);
	let tabIndicator: HTMLDivElement;

	const getActiveElement = () =>
		tabElements.find((_, index) => index === activeTabIndex) ?? tabElements[0];

	const setTabIndicatorPosition = () => {
		if (!tabIndicator) return;
		tabIndicator.style.transform = `translateX(${
			tabElements[activeTabIndex].offsetLeft
		}px) scaleX(${(tabElements[activeTabIndex].clientWidth ?? 100) / 100})`;
	};

	onMount(() => {
		setTabIndicatorPosition();
	});
</script>

<div class="relative flex gap-4 xs:gap-10">
	{#each tabItems as tab, index}
		<div
			class={cn("px-7", { "active class": index === activeTabIndex })}
			bind:this={tabElements[index]}
		>
			<a
				href={tab.route}
				on:click={() => {
					activeTabIndex = index;
					setTabIndicatorPosition();
				}}
				class="text-2xl">{tab.label}</a
			>
		</div>
	{/each}
	<div
		class="absolute bottom-0 left-0 h-[2px] w-[100px] origin-left rounded-sm bg-amber-500 transition-transform duration-500 ease-in-out"
		bind:this={tabIndicator}
	/>
</div>
