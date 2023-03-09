const yearOfConstruction = 2023;

const getCurrentYear = () => new Date(Date.now()).getFullYear();

const getYearspan = () => {
	const currentYear = getCurrentYear();
	if (currentYear === yearOfConstruction) return yearOfConstruction.toString();
	return `${yearOfConstruction}-${currentYear}`;
};

export const getCopyrightText = () => `© ${getYearspan()} Tim Ostermann`;
