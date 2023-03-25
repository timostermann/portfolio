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
