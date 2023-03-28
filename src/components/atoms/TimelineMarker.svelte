<script lang="ts">
	import cn from "classnames";
	import AnimateIn from "./AnimateIn.svelte";

	export let size: "small" | "large" = "small";
</script>

<AnimateIn
	tag="div"
	className={cn("rounded-full bg-amber-500 shadow-shine shadow-amber-400 hover:scale-110", {
		"h-6 w-6": size === "small",
		"h-8 w-8": size === "large"
	})}
	inViewClass="opacity-100"
	outOfViewClass="opacity-0"
/>
