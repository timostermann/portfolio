<script lang="ts">
	import type { NavItem } from "../../types";
	import { onMount } from "svelte";
	import cn from "classnames";
	import { page } from "$app/stores";

	export let tabItems: NavItem[];

	let activeTabIndex = $page.url.pathname === "/projects" ? 1 : 0;
	let tabElements: HTMLDivElement[] = Array(tabItems.length).fill(null);
	let tabIndicator: HTMLDivElement;
	let initialized = false;

	const setTabIndicatorPosition = () => {
		if (!tabIndicator) return;
		tabIndicator.style.transform = `translateX(${
			tabElements[activeTabIndex].offsetLeft
		}px) scaleX(${(tabElements[activeTabIndex].clientWidth ?? 100) / 100})`;
	};

	onMount(() => {
		setTabIndicatorPosition();
		setTimeout(() => (initialized = true), 300);
	});
</script>

<div class="relative flex gap-4 xs:gap-10">
	{#each tabItems as tab, index}
		<div
			class={cn("px-6 transition-colors hover:text-amber-100", {
				active: index === activeTabIndex
			})}
			bind:this={tabElements[index]}
		>
			<a
				href={tab.route}
				on:click={() => {
					activeTabIndex = index;
					setTabIndicatorPosition();
				}}
				class="text-xl">{tab.label}</a
			>
		</div>
	{/each}
	<div
		class={cn(
			"absolute -bottom-4 left-0 h-[2px] w-[100px] origin-left rounded-sm bg-amber-500 shadow-[0_4px_6px_0_#feb21e80] transition-[transform,background-color,box-shadow] duration-500 ease-in-out",
			{ "bg-opacity-0 shadow-transparent": !initialized }
		)}
		bind:this={tabIndicator}
	/>
</div>
