<script lang="ts">
	export let label: string;
	export let focusTarget: string;
	export let id: string | undefined = undefined;
	export let className: string | undefined = undefined;
	export let direction: "left" | "right" = "left";
</script>

<a
	{id}
	href={focusTarget}
	class={`pointer-events-none fixed z-[200] inline-block rounded-sm bg-amber-700 p-2 text-white underline opacity-0 transition-transform focus:translate-x-0 focus:opacity-100 ${
		direction === "left" ? "left-0 -translate-x-full" : "right-0 translate-x-full"
	} ${className}`}
>
	{label}
</a>
