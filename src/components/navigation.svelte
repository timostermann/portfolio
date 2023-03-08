<script lang="ts">
	import type { NavItem } from "../types";
	import Tabs from "./tabs.svelte";

	const navigationItems: NavItem[] = [
		{ route: "/", label: "About" },
		{ route: "/projects", label: "Projects" }
	];
</script>

<header
	class="fixed z-10 flex h-16 w-full items-center justify-center bg-primary-500 bg-opacity-50 backdrop-blur-md"
>
	<nav class="flex items-center justify-center">
		<Tabs tabItems={navigationItems} />
	</nav>
</header>
