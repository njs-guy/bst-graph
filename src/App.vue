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
import { fetchStats } from "./modules/fetchStats";
import { graphState } from "./modules/graphState";
import { outputImage } from "./modules/outputImage";
import { randomGraph } from "./modules/randomGraph";
// import { randInt } from "./modules/randInt";

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
			graphState,
			// outputImage and fetchStats don't work in the HTML without these lines
			outputImage,
			fetchStats,
		};
	},
	methods: {
		// When a stat changes
		onNameChanged(value: string) {
			graphState.setName(value);
		},
		onHpChanged(value: string) {
			graphState.setHp(Number(value));
		},
		onAttChanged(value: string) {
			graphState.setAtt(Number(value));
		},
		onDefChanged(value: string) {
			graphState.setDef(Number(value));
		},
		onSpaChanged(value: string) {
			graphState.setSpa(Number(value));
		},
		onSpdChanged(value: string) {
			graphState.setSpd(Number(value));
		},
		onSpeChanged(value: string) {
			graphState.setSpe(Number(value));
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
		randomGraph();
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
