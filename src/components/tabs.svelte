<script lang="ts">
	import type { NavItem } from "../types";
	import { onMount } from "svelte";
	import cn from "classnames";

	export let tabItems: NavItem[];

	let activeTabIndex = 0;
	let tabElements: HTMLDivElement[] = Array(tabItems.length).fill(null);
	let tabIndicator: HTMLDivElement;

	// TODO: smoother initial state
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
			class={cn("px-6", { "active class": index === activeTabIndex })}
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
		class="tab-shadow absolute -bottom-4 left-0 h-[2px] w-[100px] origin-left rounded-sm bg-amber-500 transition-transform duration-500 ease-in-out"
		bind:this={tabIndicator}
	/>
</div>
