<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import { createNoise2D } from "simplex-noise";

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let width: number;
	let height: number;
	const noise = createNoise2D();
	let offset = 0.01;
	let interval: NodeJS.Timer;

	function drawPolygon(
		centerX: number,
		centerY: number,
		sideCount: number,
		size: number,
		strokeWidth: number,
		strokeColor: string,
		fillColor: string,
		rotationDegrees: number
	) {
		if (!ctx) return;
		let radians = (rotationDegrees * Math.PI) / 180;
		ctx.translate(centerX, centerY);
		ctx.rotate(radians);
		ctx.beginPath();
		ctx.moveTo(size * Math.cos(0), size * Math.sin(0));
		for (let i = 1; i <= sideCount; i += 1) {
			ctx.lineTo(
				size * Math.cos((i * 2 * Math.PI) / sideCount),
				size * Math.sin((i * 2 * Math.PI) / sideCount)
			);
		}
		ctx.closePath();
		ctx.fillStyle = fillColor;
		ctx.strokeStyle = strokeColor;
		ctx.lineWidth = strokeWidth;
		ctx.stroke();
		ctx.fill();
		ctx.rotate(-radians);
		ctx.translate(-centerX, -centerY);
	}

	const draw = (ctx: CanvasRenderingContext2D | null) => {
		if (!ctx) return;
		const rowSize = 30;
		const columnSize = 20;
		const rows = height / rowSize;
		const columns = width / columnSize;
		ctx.clearRect(0, 0, width, height);
		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < columns; j++) {
				const noiseValue = noise(j + offset, i + offset / 2);
				drawPolygon(
					j * columnSize,
					i * rowSize,
					3,
					5,
					0,
					"transparent",
					`rgba(60, 30, 45, ${(noiseValue + 1) * 0.5})`,
					360 / i
				);
			}
		}
	};

	const resize = () => {
		width = canvas.width = canvas.offsetWidth;
		height = canvas.height = canvas.offsetHeight;
		draw(ctx);
	};

	onMount(() => {
		ctx = canvas.getContext("2d");
		resize();
		interval = setInterval(() => {
			draw(ctx);
			offset += 0.05;
		}, 50);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<canvas class="h-full w-full" bind:this={canvas} />
<svelte:window on:resize={resize} />
