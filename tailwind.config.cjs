require("daisyui/src/colors/themes");

// Use these values to customize the base colors.
// Font
const fontFamily = "'Cabin', Arial, sans";

// Light colors
const txtColor = "#000000";
const primary = "#1d4ed8";
const bg = "#e5e5e5";
const panel = "#ffffff";
const hp = "#ef4444";
const def = "#eab308";
const att = "#f97316";
const spA = "#3b82f6";
const spD = "#22c55e";
const spe = "#ec4899";

// Dark colors
const txtColorDark = "#fafafa";
const primaryDark = "#6d28d9";
const bgDark = "#262626";
const panelDark = "#404040";
const hpDark = "#dc2626";
const attDark = "#ea580c";
const defDark = "#ca8a04";
const spADark = "#2563eb";
const spDDark = "#16a34a";
const speDark = "#db2777";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					...["[data-theme=light]"],
					"fontFamily": fontFamily,
					"base-100": bg,
					"base-200": panel,
					"base-content": txtColor,
					"primary": primary,
					"--btn-text-case": "none",
					".btn-primary": {
						color: "#ffffff",
					},
					"#bar-hp": {
						"background-color": hp,
					},
					"#bar-att": {
						"background-color": att,
					},
					"#bar-def": {
						"background-color": def,
					},
					"#bar-spa": {
						"background-color": spA,
					},
					"#bar-spd": {
						"background-color": spD,
					},
					"#bar-spe": {
						"background-color": spe,
					},
				},
				dark: {
					...["[data-theme=dark]"],
					"fontFamily": fontFamily,
					"base-100": bgDark,
					"base-200": panelDark,
					"base-content": txtColorDark,
					"primary": primaryDark,
					"--btn-text-case": "none",
					".btn-primary": {
						color: "#ffffff",
					},
					"#bar-hp": {
						"background-color": hpDark,
					},
					"#bar-att": {
						"background-color": attDark,
					},
					"#bar-def": {
						"background-color": defDark,
					},
					"#bar-spa": {
						"background-color": spADark,
					},
					"#bar-spd": {
						"background-color": spDDark,
					},
					"#bar-spe": {
						"background-color": speDark,
					},
				},
			},
		],
		darkTheme: "dark",
	},
};
