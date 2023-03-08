<script lang="ts">
	import stage from "assets/stage.png";
	import stageLg from "assets/stage-lg.png";
	import stageXl from "assets/stage-xl.png";
</script>

<picture>
	<source srcset={stageXl} media="(min-width: 1500px)" />
	<source srcset={stageLg} media="(min-width: 1100px)" />
	<img src={stage} alt="Laptop on a desk" class="h-screen w-full object-cover " />
</picture>
<h1>About</h1>
