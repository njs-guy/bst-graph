/** @type {import('tailwindcss').Config} */

let fontFamily = "'Cabin', Arial, sans";
let primary = "#1d4ed8";
let primaryDark = "#6d28d9";
let bg = "#e5e5e5";
let bgDark = "#262626";
let panel = "#ffffff";
let panelDark = "#404040";
let txtColor = "#000000";
let txtColorDark = "#fafafa";

let hp = "#ef4444";
let hpDark = "#dc2626";
let att = "#f97316";
let attDark = "#ea580c";
let def = "#eab308";
let defDark = "#ca8a04";
let spa = "#3b82f6";
let spaDark = "#2563eb";
let spd = "#22c55e";
let spdDark = "#16a34a";
let spe = "#ec4899";
let speDark = "#db2777";

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
					...require("daisyui/src/colors/themes")[
						"[data-theme=light]"
					],
					"fontFamily": fontFamily,
					"base-100": bg,
					"base-200": panel,
					// "base-300": "#fafafa",
					"base-content": txtColor,
					"primary": primary,
					"--btn-text-case": "none",
				},
				dark: {
					...require("daisyui/src/colors/themes")[
						"[data-theme=dark]"
					],
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
