<template>
	<Header @darkMode="changeTheme" />
	<div class="mc-margin">
		<div class="main-content grid grid-cols-1 gap-4 max-w-lg">
			<Graph
				:nameLabel="graphState.name"
				:hpStat="graphState.hp"
				:attStat="graphState.att"
				:defStat="graphState.def"
				:spaStat="graphState.spa"
				:spdStat="graphState.spd"
				:speStat="graphState.spe"
				:totStat="graphState.total"
			/>
			<form
				class="panel flex flex-row"
				id="name-sec"
			>
				<NameInput
					class="basis-1/2"
					:default="graphState.name"
					idName="name-input"
					@nameChanged="onNameChanged"
				/>
				<button
					type="button"
					class="btn bg-primary self-end h-8 basis-1/2"
					@click="fetchStats(graphState.name)"
				>
					Auto fill
				</button>
			</form>
			<form
				class="panel flex-row grid grid-cols-3"
				id="stat-sec"
			>
				<LabelInput
					idName="hp-input"
					text="HP"
					:default="String(graphState.hp)"
					@statChanged="onHpChanged"
				/>
				<LabelInput
					idName="att-input"
					text="Attack"
					:default="String(graphState.att)"
					@statChanged="onAttChanged"
				/>
				<LabelInput
					idName="def-input"
					text="Defense"
					:default="String(graphState.def)"
					@statChanged="onDefChanged"
				/>
				<LabelInput
					idName="spa-input"
					text="Sp. Attack"
					:default="String(graphState.spa)"
					@statChanged="onSpaChanged"
				/>
				<LabelInput
					idName="spd-input"
					text="Sp. Defense"
					:default="String(graphState.spd)"
					@statChanged="onSpdChanged"
				/>
				<LabelInput
					idName="spe-input"
					text="Speed"
					:default="String(graphState.spe)"
					@statChanged="onSpeChanged"
				/>
			</form>
			<div
				class="panel flex-row grid grid-cols-2"
				id="save-sec"
			>
				<div class="flex flex-col">
					<label
						for="quality"
						class="place-self-start"
						>Quality</label
					>
					<select
						name="quality"
						id="quality-select"
						class="rounded p-1 h-8 bg-bg dark:bg-bg-dark"
					>
						<option value="1">Low</option>
						<option
							value="3"
							selected
						>
							Medium
						</option>
						<option value="5">High</option>
						<option value="7">Very High</option>
						<option value="10">Ultra</option>
					</select>
				</div>
				<button
					type="button"
					class="btn bg-primary h-8 self-end"
					@click="outputImage('png')"
				>
					Save as PNG
				</button>
				<button
					type="button"
					class="btn bg-primary h-8 col-span-2"
					@click="outputImage()"
				>
					Save as SVG
				</button>
			</div>
		</div>
	</div>
	<!-- Footer, probably -->
</template>

<script lang="ts">
// Vue
import { defineComponent } from "vue";

// Components
import Graph from "./components/Graph.vue";
import Header from "./components/Header.vue";
import LabelInput from "./components/LabelInput.vue";
import NameInput from "./components/NameInput.vue";

// Modules
import { checkForForms } from "./modules/checkForForms";
import { randInt } from "./modules/randInt";
import { graphState } from "./modules/graphState";

// Packages
import { elementToSVG } from "dom-to-svg";
import { PokemonClient } from "pokenode-ts";

const imageType = {
	PNG: "png",
	SVG: "svg",
};

export default defineComponent({
	name: "App",
	components: {
		Graph,
		LabelInput,
		NameInput,
		Header,
	},
	data() {
		return {
			// Stats for use in graph and control inputs
			// name: "Name",
			// hp: 1,
			// att: 1,
			// def: 1,
			// spa: 1,
			// spd: 1,
			// spe: 1,
			// tot: 1,
			graphState,
		};
	},
	methods: {
		// When a stat changes
		onNameChanged(value: string) {
			graphState.setName(value);
		},
		onHpChanged(value: string) {
			graphState.setHp(Number(value));
			// this.updateTotal();
		},
		onAttChanged(value: string) {
			graphState.setAtt(Number(value));
			// this.updateTotal();
		},
		onDefChanged(value: string) {
			graphState.setDef(Number(value));
			// this.updateTotal();
		},
		onSpaChanged(value: string) {
			graphState.setSpa(Number(value));
			// this.updateTotal();
		},
		onSpdChanged(value: string) {
			graphState.setSpd(Number(value));
			// this.updateTotal();
		},
		onSpeChanged(value: string) {
			graphState.setSpe(Number(value));
			// this.updateTotal();
		},
		// Updates the total stat
		// updateTotal() {
		// 	this.tot =
		// 		this.hp + this.att + this.def + this.spa + this.spd + this.spe;
		// },
		// Saves the graph as an svg or png image
		outputImage(imgType = imageType.SVG) {
			let output;
			let element = document.getElementById("output");

			// Check whether output element is null because typescript kept yelling at me about it
			if (element != null) {
				output = element;
			} else {
				return; // If element is null, do nothing
			}

			let fileName = graphState.name; // name of file. not extension.

			// Convert graph html to svg
			let svg = elementToSVG(output);

			// Serialize the svg xml to a string
			let s = new XMLSerializer();
			let strSVG = s.serializeToString(svg);

			// Save that string as an svg file
			let file = new Blob([strSVG], {
				type: "image/svg+xml;charset=utf-8",
			});
			const a = document.createElement("a");
			const url = URL.createObjectURL(file);

			// If image should be an svg
			if (imgType == imageType.SVG) {
				// Download svg file
				a.href = url;
				a.download = fileName + ".svg";
				document.body.appendChild(a);
				a.click();

				// Remove created link
				document.body.removeChild(a);
				window.URL.revokeObjectURL(url);
			}

			// if the image should be a png
			if (imgType == imageType.PNG) {
				let canvas = document.createElement("canvas");
				let size = element.getBoundingClientRect();
				const qSel = document.getElementById(
					"quality-select"
				) as HTMLSelectElement;
				let w: number;
				let h: number;

				if (qSel != null) {
					let quality = Number(qSel.value); // take quality multiplier from qSel

					this.saveQuality(String(quality));

					w = size.width * quality;
					h = size.height * quality;
				} else {
					w = size.width;
					h = size.height;
				}
				let img = new Image();

				img.onload = () => {
					canvas.width = w;
					canvas.height = h;

					// Draw image from canvas
					canvas.getContext("2d")?.drawImage(img, 0, 0, w, h);

					// download PNG
					let png = canvas.toDataURL();
					a.href = png;
					a.download = fileName;
					document.body.appendChild(a);
					a.click();

					// Remove created link
					document.body.removeChild(a);
					window.URL.revokeObjectURL(png);
				};

				img.src = url;

				// Get SVG size source:
				// https://stackoverflow.com/a/24649456

				// Convert SVG to PNG source:
				// https://levelup.gitconnected.com/draw-an-svg-to-canvas-and-download-it-as-image-in-javascript-f7f7713cf81f
			}
		}, // End outputImage

		// fetch stat totals from PokeAPI
		async fetchStats(pokName: string = "bidoof") {
			let statArr: any = [];
			let name = checkForForms(pokName.toLowerCase());

			const api = new PokemonClient({
				cacheOptions: { maxAge: 5000 },
			});

			await api
				.getPokemonByName(name)
				.then((data) => {
					for (let i = 0; i < data.stats.length; i++) {
						// Take each stat and push it to statArray
						let current = data.stats[i].base_stat;
						statArr.push(current);
					}

					this.fillGraph(statArr); // Send data to controls
				}) // Retrieve base stats
				.catch((error) =>
					alert(
						"That Pokemon does not exist. Please check spelling and try again."
					)
				);
		},
		// Update graph with current stats
		fillGraph(stats: Array<number>) {
			graphState.setHp(stats[0]);
			graphState.setAtt(stats[1]);
			graphState.setDef(stats[2]);
			graphState.setSpa(stats[3]);
			graphState.setSpd(stats[4]);
			graphState.setSpe(stats[5]);
			// this.hp = stats[0];
			// this.att = stats[1];
			// this.def = stats[2];
			// this.spa = stats[3];
			// this.spd = stats[4];
			// this.spe = stats[5];
			// this.updateTotal();
		},
		changeTheme(darkMode: Boolean) {
			let html = document.getElementsByTagName("html")[0];

			if (darkMode) {
				html.classList.add("dark");
			} else {
				html.classList.remove("dark");
			}

			this.saveTheme(String(darkMode));
		},
		saveQuality(quality: string) {
			localStorage.setItem("quality", quality);
		},
		saveTheme(dark: string) {
			localStorage.setItem("dark", dark);
		},
		loadSettings() {
			let quality = localStorage.getItem("quality");
			let dark = localStorage.getItem("dark");

			const qSel = document.getElementById(
				"quality-select"
			) as HTMLSelectElement;
			const themeSw = document.getElementById(
				"theme"
			) as HTMLInputElement;

			// Check if there's a saved setting for quality
			if (quality !== null) {
				qSel.value = quality; // Set the value of the quality selector
			}

			// Check if dark mode is true
			if (dark === "true") {
				this.changeTheme(true); // Change theme
				themeSw.checked = true; // Check theme checkbox
			}
		},
	},
	mounted: function () {
		// On load

		// Random names to stat with
		const NAMES = [
			"Pikablu",
			"Missingno",
			"Agumon",
			"Jack Frost",
			"Frodo",
			"Helix",
			"Sonic",
			"Morgana",
			"Mario",
			"Mewthree",
			"Slime",
			"Moogle",
			"Mega Bidoof",
			"Cthulu",
			"Chopper",
		];

		const defaultStatMin = 5;
		const defaultStatMax = 120;

		let nameIndex = randInt(0, NAMES.length);
		let defaultName = NAMES[nameIndex];

		this.onNameChanged(defaultName);
		this.onHpChanged(String(randInt(defaultStatMin, defaultStatMax)));
		this.onAttChanged(String(randInt(defaultStatMin, defaultStatMax)));
		this.onDefChanged(String(randInt(defaultStatMin, defaultStatMax)));
		this.onSpaChanged(String(randInt(defaultStatMin, defaultStatMax)));
		this.onSpdChanged(String(randInt(defaultStatMin, defaultStatMax)));
		this.onSpeChanged(String(randInt(defaultStatMin, defaultStatMax)));

		this.loadSettings();
	},
});
</script>

<style>
html {
	margin: 0;
	padding: 0;
}

body {
	@apply bg-bg dark:bg-bg-dark;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	@apply text-txt dark:text-txt-dark;
}

.mc-margin {
	margin: 10px;
}

.main-content {
	margin: 0 auto;
}

.panel {
	@apply bg-panel dark:bg-panel-dark rounded-md p-3 place-content-stretch gap-4;
}

.btn {
	@apply dark:bg-primary-dark hover:bg-primary-hover hover:dark:bg-primary-hoverDark text-white rounded;
	/* the bg class is on every individual button because applying it here does not work and I can't fathom why */
}

.bar-hp {
	@apply bg-hp dark:bg-hp-dark;
}

.bar-att {
	@apply bg-att dark:bg-att-dark;
}

.bar-def {
	@apply bg-def dark:bg-def-dark;
}

.bar-spa {
	@apply bg-spa dark:bg-spa-dark;
}

.bar-spd {
	@apply bg-spd dark:bg-spd-dark;
}

.bar-spe {
	@apply bg-spe dark:bg-spe-dark;
}

.bar-tot {
	@apply bg-tot dark:bg-tot-dark;
}
</style>
