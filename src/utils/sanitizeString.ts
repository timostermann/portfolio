import latinize from "latinize";

const latinMap = {
	...latinize.characters,
	Ä: "Ae",
	Ö: "Oe",
	Ü: "Ue",
	ä: "ae",
	ö: "oe",
	ü: "ue"
};

export const replaceUmlaute = (str: string): string => {
	// latinize type doesn't match the actual funtion type
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (latinize as any)(str, latinMap);
};

// Replace all special characters and empty spaces in a string with hyphens
export const sanitizeString = (str: string | undefined): string => {
	if (!str) return "";
	const stringNoUmlaute = replaceUmlaute(str);
	let cleanString = stringNoUmlaute.replace(/([~!@#$%^&*()_+=`{}[\]\\:;'<>,./? |])+|-/g, "-");

	// Remove leading and trailing hyphens
	cleanString = cleanString.replace(/^-+|-+$/g, "");

	return cleanString.toLocaleLowerCase();
};
