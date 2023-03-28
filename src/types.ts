type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc["length"]]>;

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

export type NavItem = { route: string; label: string };
export type CvItem = {
	date: string;
	title: string;
	description: string;
	technologies: string[];
};
export type Project = {
	date: string;
	title: string;
	description: string;
	technologies: string[];
	source: string;
	link?: string;
};
export type Technology = {
	name: string;
	experience: IntRange<1, 101>;
};
