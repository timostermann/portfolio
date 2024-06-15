import type { Project } from "../types";

export const projects: Project[] = [
	{
		date: "2023",
		title: "Personal Website",
		description:
			"After sitting on the idea and an unused domain for a while, I finally found the time and motivation to build this website. I used it as an opportunity to dive into some new technologies. I've used Svelte before, but this is the first time I've used SvelteKit. I used Midjourney to create a stage image, Figma to draft a design and Tailwind for styling.",
		technologies: ["Svelte", "SvelteKit", "Tailwind"],
		source: "https://github.com/timostermann/portfolio"
	},
	{
		date: "2022",
		title: "ViCat Meme Coin Website",
		description:
			"ViCat is a meme coin project that two friends and I were working on. While I have no experience (or knowledge, honestly) with crypto, I've had fun making websites for it. I did an MVP site and some smaller event sites for it with React in 2021, but after a redesign and a new logo, I decided to rebuild the site with Svelte and SCSS. It's been a cool playground and really made me appreciate the simplicity of Svelte.",
		technologies: ["Svelte", "SCSS"],
		source: "https://github.com/timostermann/vicat-v2",
		link: "https://vicat.tech"
	},
	{
		date: "2021",
		title: "SKM Measurement App",
		description:
			"I was working on a measurement app for shower manufacturers. The project was part of my bachelor thesis. It was my first time working with Flutter and Dart. I really enjoyed the experience and would like to dive deeper into app development at some point.",
		technologies: ["Flutter", "Dart"],
		source: "https://github.com/timostermann/skm"
	},
	{
		date: "2020",
		title: "Huffman Compression",
		description:
			"To also present a less visual project, I decided to add a project I did in university. It's an implementation of the Huffman compression algorithm in C. It was a great project to learn more about low-level programming and how to make a CLI application.",
		technologies: ["C"],
		source: "https://github.com/timostermann/huffman"
	}
];
