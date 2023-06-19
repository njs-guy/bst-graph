// Use these values to customize the base colors.
// Font
const fontFamily = "'Cabin', Arial, sans";

// Light colors
const txtColor = "#000000";
const primary = "#1d4ed8";
const btnTextColor = "#ffffff";
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

// Types
const typeColors = {
	bug: { bg: "#AABB22", text: "white" },
	dark: { bg: "#775544", text: "white" },
	dragon: { bg: "#7766EE", text: "white" },
	electric: { bg: "#FFCC33", text: "black" },
	fairy: { bg: "#EE99EE", text: "black" },
	fighting: { bg: "#BB5544", text: "white" },
	fire: { bg: "#FF4422", text: "white" },
	flying: { bg: "#8899FF", text: "white" },
	ghost: { bg: "#6666BB", text: "white" },
	grass: { bg: "#77CC55", text: "white" },
	ground: { bg: "#DAB954", text: "white" },
	ice: { bg: "#66CCFF", text: "black" },
	normal: { bg: "#AAAA99", text: "white" },
	poison: { bg: "#AA5599", text: "white" },
	psychic: { bg: "#FF5599", text: "white" },
	rock: { bg: "#BBAA66", text: "white" },
	steel: { bg: "#AAAABB", text: "white" },
	water: { bg: "#3399FF", text: "white" },
};

//
// END
// CONFIG
// VALUES
//

function createTheme(genOpts, statOpts, typeOpts, isDarkTheme) {
	let base = {};

	if (isDarkTheme) {
		base = {
			...["[data-theme=dark]"],
		};
	} else {
		base = {
			...["[data-theme=light]"],
		};
	}

	const theme = {
		"fontFamily": genOpts.fontFamily,
		"base-100": genOpts.bg,
		"base-200": genOpts.panel,
		"base-content": genOpts.txtColor,
		"primary": genOpts.primary,
		"--btn-text-case": "none",
		".btn-primary": {
			color: genOpts.btnTextColor,
		},
		".logo-bg": { fill: genOpts.logoFill },
		"#bar-hp": { "background-color": statOpts.hp },
		".bar-hp-container": { "background-color": statOpts.hpContainer },
		"#bar-att": { "background-color": statOpts.att },
		".bar-att-container": { "background-color": statOpts.attContainer },
		"#bar-def": { "background-color": statOpts.def },
		".bar-def-container": { "background-color": statOpts.defContainer },
		"#bar-spA": { "background-color": statOpts.spA },
		".bar-spA-container": { "background-color": statOpts.spAContainer },
		"#bar-spD": { "background-color": statOpts.spD },
		".bar-spD-container": { "background-color": statOpts.spDContainer },
		"#bar-spe": { "background-color": statOpts.spe },
		".bar-spe-container": { "background-color": statOpts.speContainer },
		"#bar-tot": { "background-color": statOpts.tot },
		".bar-tot-container": { "background-color": statOpts.totContainer },
		".type-bug": {
			"color": typeOpts.bug.text,
			"background-color": typeOpts.bug.bg,
		},
		".type-dark": {
			"color": typeOpts.dark.text,
			"background-color": typeOpts.dark.bg,
		},
		".type-dragon": {
			"color": typeOpts.dragon.text,
			"background-color": typeOpts.dragon.bg,
		},
		".type-electric": {
			"color": typeOpts.electric.text,
			"background-color": typeOpts.electric.bg,
		},
		".type-fairy": {
			"color": typeOpts.fairy.text,
			"background-color": typeOpts.fairy.bg,
		},
		".type-fighting": {
			"color": typeOpts.fighting.text,
			"background-color": typeOpts.fighting.bg,
		},
		".type-fire": {
			"color": typeOpts.fire.text,
			"background-color": typeOpts.fire.bg,
		},
		".type-flying": {
			"color": typeOpts.flying.text,
			"background-color": typeOpts.flying.bg,
		},
		".type-ghost": {
			"color": typeOpts.ghost.text,
			"background-color": typeOpts.ghost.bg,
		},
		".type-grass": {
			"color": typeOpts.grass.text,
			"background-color": typeOpts.grass.bg,
		},
		".type-ground": {
			"color": typeOpts.ground.text,
			"background-color": typeOpts.ground.bg,
		},
		".type-ice": {
			"color": typeOpts.ice.text,
			"background-color": typeOpts.ice.bg,
		},
		".type-normal": {
			"color": typeOpts.normal.text,
			"background-color": typeOpts.normal.bg,
		},
		".type-poison": {
			"color": typeOpts.poison.text,
			"background-color": typeOpts.poison.bg,
		},
		".type-psychic": {
			"color": typeOpts.psychic.text,
			"background-color": typeOpts.psychic.bg,
		},
		".type-rock": {
			"color": typeOpts.rock.text,
			"background-color": typeOpts.rock.bg,
		},
		".type-steel": {
			"color": typeOpts.steel.text,
			"background-color": typeOpts.steel.bg,
		},
		".type-water": {
			"color": typeOpts.water.text,
			"background-color": typeOpts.water.bg,
		},
	};

	const result = { ...base, ...theme };

	return result;
}

function lightTheme() {
	const genOpts = {
		fontFamily: fontFamily,
		txtColor: txtColor,
		primary: primary,
		btnTextColor: btnTextColor,
		bg: bg,
		panel: panel,
		logoFill: logoFill,
	};

	const statOpts = {
		hp: hp,
		hpContainer: hpContainer,
		att: att,
		attContainer: attContainer,
		def: def,
		defContainer: defContainer,
		spA: spA,
		spAContainer: spAContainer,
		spD: spD,
		spDContainer: spDContainer,
		spe: spe,
		speContainer: speContainer,
		tot: tot,
		totContainer: totContainer,
	};

	return createTheme(genOpts, statOpts, typeColors, false);
}

function darkTheme() {
	const genOpts = {
		fontFamily: fontFamily,
		txtColor: txtColorDark,
		primary: primaryDark,
		btnTextColor: btnTextColor,
		bg: bgDark,
		panel: panelDark,
		logoFill: logoFillDark,
	};

	const statOpts = {
		hp: hpDark,
		hpContainer: hpContainerDark,
		att: attDark,
		attContainer: attContainerDark,
		def: defDark,
		defContainer: defContainerDark,
		spA: spADark,
		spAContainer: spAContainerDark,
		spD: spDDark,
		spDContainer: spDContainerDark,
		spe: speDark,
		speContainer: speContainerDark,
		tot: totDark,
		totContainer: totContainerDark,
	};

	return createTheme(genOpts, statOpts, typeColors, true);
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: lightTheme(),
				dark: darkTheme(),
			},
		],
		darkTheme: "dark",
	},
};
