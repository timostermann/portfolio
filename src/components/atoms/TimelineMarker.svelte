<script lang="ts">
	import cn from "classnames";

	export let size: "small" | "large" = "small";
</script>

<div
	class={cn(
		"rounded-full bg-amber-500 shadow-shine shadow-amber-400 transition-transform hover:scale-110",
		{
			"h-6 w-6": size === "small",
			"h-8 w-8": size === "large"
		}
	)}
/>
