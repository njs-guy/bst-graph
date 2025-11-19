export interface GraphTheme {
	textColor: string;
	background: string;
	hp: string;
	attack: string;
	defense: string;
	spAttack: string;
	spDefense: string;
	speed: string;
	total: string;
	bug: typeBadgeColors;
	dark: typeBadgeColors;
	dragon: typeBadgeColors;
	electric: typeBadgeColors;
	fairy: typeBadgeColors;
	fighting: typeBadgeColors;
	fire: typeBadgeColors;
	flying: typeBadgeColors;
	ghost: typeBadgeColors;
	grass: typeBadgeColors;
	ground: typeBadgeColors;
	ice: typeBadgeColors;
	normal: typeBadgeColors;
	poison: typeBadgeColors;
	psychic: typeBadgeColors;
	rock: typeBadgeColors;
	steel: typeBadgeColors;
	water: typeBadgeColors;
}

export interface typeBadgeColors {
	text: string;
	bg: string;
}

export const themeDark: GraphTheme = {
	textColor: "#fafafa",
	background: "#404040",
	hp: "#DC2626",
	attack: "#EA5824",
	defense: "#CA8A28",
	spAttack: "#2563EB",
	spDefense: "#17A34A",
	speed: "#DB2777",
	total: "#94A3B8",
	bug: { bg: "#AABB22", text: "black" },
	dark: { bg: "#735A4A", text: "white" },
	dragon: { bg: "#7766EE", text: "black" },
	electric: { bg: "#FFCC33", text: "black" },
	fairy: { bg: "#EE99EE", text: "black" },
	fighting: { bg: "#BB5544", text: "white" },
	fire: { bg: "#FF4422", text: "white" },
	flying: { bg: "#8899FF", text: "black" },
	ghost: { bg: "#6666BB", text: "white" },
	grass: { bg: "#77CC55", text: "black" },
	ground: { bg: "#DAB954", text: "black" },
	ice: { bg: "#66CCFF", text: "black" },
	normal: { bg: "#AAAA99", text: "black" },
	poison: { bg: "#AA5599", text: "white" },
	psychic: { bg: "#FF5599", text: "black" },
	rock: { bg: "#BBAA66", text: "black" },
	steel: { bg: "#AAAABB", text: "black" },
	water: { bg: "#3399FF", text: "black" },
};
