// Use these values to customize the base colors.
// Font
const fontFamily = "'Cabin', Arial, sans";

// Light colors
const txtColor = "#000000";
const primary = "#1d4ed8";
const bg = "#e5e5e5";
const panel = "#ffffff";
const logoFill = "#262626";
const barContainer = bg;
const hp = "#ef4444";
const hpContainer = barContainer;
const att = "#f97316";
const attContainer = barContainer;
const def = "#eab308";
const defContainer = barContainer;
const spA = "#3b82f6";
const spAContainer = barContainer;
const spD = "#22c55e";
const spDContainer = barContainer;
const spe = "#ec4899";
const speContainer = barContainer;
const tot = "#94a3b8";
const totContainer = barContainer;

// Dark colors
const txtColorDark = "#fafafa";
const primaryDark = "#6d28d9";
const bgDark = "#262626";
const panelDark = "#404040";
const logoFillDark = "#ffffff";
const barContainerDark = bgDark;
const hpDark = "#dc2626";
const hpContainerDark = barContainerDark;
const attDark = "#ea580c";
const attContainerDark = barContainerDark;
const defDark = "#ca8a04";
const defContainerDark = barContainerDark;
const spADark = "#2563eb";
const spAContainerDark = barContainerDark;
const spDDark = "#16a34a";
const spDContainerDark = barContainerDark;
const speDark = "#db2777";
const speContainerDark = barContainerDark;
const totDark = "#94a3b8";
const totContainerDark = barContainerDark;

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
					".logo-bg": {
						fill: logoFill,
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
					".logo-bg": {
						fill: logoFillDark,
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
