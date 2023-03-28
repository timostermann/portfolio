import type { Technology } from "../types";

const languages: Technology[] = [
	{
		name: "TypeScript",
		experience: 100
	},
	{
		name: "HTML",
		experience: 100
	},
	{
		name: "CSS",
		experience: 100
	},
	{
		name: "Java",
		experience: 40
	},
	{
		name: "SQL",
		experience: 40
	},
	{
		name: "C",
		experience: 30
	},
	{
		name: "Dart",
		experience: 25
	},
	{
		name: "Kotlin",
		experience: 5
	},
	{
		name: "Rust",
		experience: 5
	}
];

export const frameworks: Technology[] = [
	{
		name: "React",
		experience: 100
	},
	{
		name: "Next.js",
		experience: 100
	},
	{
		name: "Tailwind",
		experience: 100
	},
	{
		name: "Jest",
		experience: 90
	},
	{
		name: "SCSS",
		experience: 85
	},
	{
		name: "Svelte",
		experience: 80
	},
	{
		name: "Vue",
		experience: 80
	},
	{
		name: "Nuxt.js",
		experience: 75
	},
	{
		name: "SvelteKit",
		experience: 60
	},
	{
		name: "Cypress",
		experience: 40
	},
	{
		name: "Flutter",
		experience: 25
	},
	{
		name: "Nest.js",
		experience: 20
	}
];

export const techStackData: { category: string; technologies: Technology[] }[] = [
	{
		category: "Languages",
		technologies: languages
	},
	{
		category: "Frameworks & Libraries",
		technologies: frameworks
	}
];
