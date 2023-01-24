require("daisyui/src/colors/themes");

// Use these values to customize the base colors.
const fontFamily = "'Cabin', Arial, sans";
const primary = "#1d4ed8";
const primaryDark = "#6d28d9";
const bg = "#e5e5e5";
const bgDark = "#262626";
const panel = "#ffffff";
const panelDark = "#404040";
const txtColor = "#000000";
const txtColorDark = "#fafafa";
const hp = "#ef4444";
const hpDark = "#dc2626";
const att = "#f97316";
const attDark = "#ea580c";
const def = "#eab308";
const defDark = "#ca8a04";
const spa = "#3b82f6";
const spaDark = "#2563eb";
const spd = "#22c55e";
const spdDark = "#16a34a";
const spe = "#ec4899";
const speDark = "#db2777";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				hp: hp,
				att: att,
				def: def,
				spa: spa,
				spd: spd,
				spe: spe,
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					...["[data-theme=light]"],
					"fontFamily": fontFamily,
					"base-100": bg,
					"base-200": panel,
					// "base-300": "#fafafa",
					"base-content": txtColor,
					"primary": primary,
					"--btn-text-case": "none",
				},
				dark: {
					...["[data-theme=dark]"],
					"fontFamily": fontFamily,
					"base-100": bgDark,
					"base-200": panelDark,
					// "base-300": "#525252",
					"base-content": txtColorDark,
					"primary": primaryDark,
					"--btn-text-case": "none",
				},
			},
		],
		darkTheme: "dark",
	},
};
