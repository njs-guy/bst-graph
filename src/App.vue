<template>
	<AppHeader @darkMode="appConfig.changeTheme" />
	<div class="mc-margin">
		<div class="main-content grid grid-cols-1 gap-4 max-w-lg">
			<StatGraph
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
					:defaultVal="graphState.name"
					idName="name-input"
					@nameChanged="onNameChanged"
				/>
				<button
					type="button"
					class="btn btn-primary btn-sm self-end basis-1/2 rounded animate-none"
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
					:defaultVal="String(graphState.hp)"
					@statChanged="onHpChanged"
				/>
				<LabelInput
					idName="att-input"
					text="Attack"
					:defaultVal="String(graphState.att)"
					@statChanged="onAttChanged"
				/>
				<LabelInput
					idName="def-input"
					text="Defense"
					:defaultVal="String(graphState.def)"
					@statChanged="onDefChanged"
				/>
				<LabelInput
					idName="spa-input"
					text="Sp. Attack"
					:defaultVal="String(graphState.spa)"
					@statChanged="onSpaChanged"
				/>
				<LabelInput
					idName="spd-input"
					text="Sp. Defense"
					:defaultVal="String(graphState.spd)"
					@statChanged="onSpdChanged"
				/>
				<LabelInput
					idName="spe-input"
					text="Speed"
					:defaultVal="String(graphState.spe)"
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
						class="rounded p-1 h-8 bg-base-100"
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
					class="btn btn-primary btn-sm self-end rounded animate-none"
					@click="outputImage('png')"
				>
					Save as PNG
				</button>
				<button
					type="button"
					class="btn btn-primary btn-sm col-span-2 rounded animate-none"
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
import AppHeader from "./components/AppHeader.vue";
import LabelInput from "./components/LabelInput.vue";
import NameInput from "./components/NameInput.vue";
import StatGraph from "./components/StatGraph.vue";

// Modules
import * as appConfig from "./modules/appConfig";
import { fetchStats } from "./modules/fetchStats";
import { graphState } from "./modules/graphState";
import { outputImage } from "./modules/outputImage";
import { randomGraph } from "./modules/randomGraph";

export default defineComponent({
	name: "App",
	components: {
		StatGraph,
		LabelInput,
		NameInput,
		AppHeader,
	},
	data() {
		return {
			// Manages the graph state
			graphState,
			// These don't work in the HTML without these lines
			appConfig,
			fetchStats,
			outputImage,
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
	},
	mounted: function () {
		// On load
		randomGraph();
		appConfig.loadSettings();
	},
});
</script>

<style>
html {
	margin: 0;
	padding: 0;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

.mc-margin {
	margin: 10px;
}

.main-content {
	margin: 0 auto;
}

.panel {
	@apply bg-base-200 rounded-md p-3 place-content-stretch gap-4;
}

.bar-hp {
	@apply bg-hp;
}

.bar-att {
	@apply bg-att;
}

.bar-def {
	@apply bg-def;
}

.bar-spa {
	@apply bg-spa;
}

.bar-spd {
	@apply bg-spd;
}

.bar-spe {
	@apply bg-spe;
}
</style>
