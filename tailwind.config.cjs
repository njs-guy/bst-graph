// Use these values to customize the base colors.
// Font
const fontFamily = "'Cabin', Arial, sans";

// Light colors
const txtColor = "#000000";
const primary = "#1d4ed8";
const bg = "#e5e5e5";
const panel = "#ffffff";
const hp = "#ef4444";
const hpContainer = "#7f1d1d";
const att = "#f97316";
const attContainer = "#7c2d12";
const def = "#eab308";
const defContainer = "#713f12";
const spA = "#3b82f6";
const spAContainer = "#1e3a8a";
const spD = "#22c55e";
const spDContainer = "#14532d";
const spe = "#ec4899";
const speContainer = "#831843";
const tot = "#94a3b8";
const totContainer = "#334155";

// Dark colors
const txtColorDark = "#fafafa";
const primaryDark = "#6d28d9";
const bgDark = "#262626";
const panelDark = "#404040";
const hpDark = "#dc2626";
const hpContainerDark = hpContainer;
const attDark = "#ea580c";
const attContainerDark = attContainer;
const defDark = "#ca8a04";
const defContainerDark = defContainer;
const spADark = "#2563eb";
const spAContainerDark = spAContainer;
const spDDark = "#16a34a";
const spDContainerDark = spDContainer;
const speDark = "#db2777";
const speContainerDark = speContainer;
const totDark = "#94a3b8";
const totContainerDark = totContainer;

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
					".bar-hp-container": {
						"background-color": hpContainer,
					},
					"#bar-att": {
						"background-color": att,
					},
					".bar-att-container": {
						"background-color": attContainer,
					},
					"#bar-def": {
						"background-color": def,
					},
					".bar-def-container": {
						"background-color": defContainer,
					},
					"#bar-spA": {
						"background-color": spA,
					},
					".bar-spA-container": {
						"background-color": spAContainer,
					},
					"#bar-spD": {
						"background-color": spD,
					},
					".bar-spD-container": {
						"background-color": spDContainer,
					},
					"#bar-spe": {
						"background-color": spe,
					},
					".bar-spe-container": {
						"background-color": speContainer,
					},
					"#bar-tot": {
						"background-color": tot,
					},
					".bar-tot-container": {
						"background-color": totContainer,
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
					".bar-hp-container": {
						"background-color": hpContainerDark,
					},
					"#bar-att": {
						"background-color": attDark,
					},
					".bar-att-container": {
						"background-color": attContainerDark,
					},
					"#bar-def": {
						"background-color": defDark,
					},
					".bar-def-container": {
						"background-color": defContainerDark,
					},
					"#bar-spA": {
						"background-color": spADark,
					},
					".bar-spA-container": {
						"background-color": spAContainerDark,
					},
					"#bar-spD": {
						"background-color": spDDark,
					},
					".bar-spD-container": {
						"background-color": spDContainerDark,
					},
					"#bar-spe": {
						"background-color": speDark,
					},
					".bar-spe-container": {
						"background-color": speContainerDark,
					},
					"#bar-tot": {
						"background-color": totDark,
					},
					".bar-tot-container": {
						"background-color": totContainerDark,
					},
				},
			},
		],
		darkTheme: "dark",
	},
};
