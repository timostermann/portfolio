<script lang="ts">
	import type { NavItem } from "../../types";
	import Tabs from "../atoms/Tabs.svelte";

	const navigationItems: NavItem[] = [
		{ route: "/", label: "About" },
		{ route: "/projects", label: "Projects" }
	];
</script>

<header
	class="fixed z-40 flex h-14 w-full items-center justify-center bg-primary-500 bg-opacity-50 backdrop-blur-md"
>
	<nav class="flex items-center justify-center">
		<Tabs tabItems={navigationItems} />
	</nav>
</header>
