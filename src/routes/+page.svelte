<script lang="ts">
	import stage from "assets/stage.png";
	import stageXl from "assets/stage-xl.png";
</script>

<picture>
	<source srcset={stageXl} media="(min-width: 1500px)" />
	<img
		src={stage}
		alt="Laptop on a desk"
		class="h-[500px] max-h-screen w-full object-cover xs:h-auto"
	/>
</picture>
<h1>About</h1>
