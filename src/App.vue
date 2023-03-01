<template>
	<div class="mc-margin">
		<AppHeader @darkMode="appConfig.changeTheme" />
		<div class="main-content grid grid-cols-1 gap-4 max-w-lg">
			<StatGraph
				:nameLabel="graphState.name"
				:hpStat="graphState.hp"
				:attStat="graphState.att"
				:defStat="graphState.def"
				:spAStat="graphState.spA"
				:spDStat="graphState.spD"
				:speStat="graphState.spe"
				:totStat="graphState.total"
			/>
			<form
				class="panel grid grid-cols-2"
				id="name-sec"
			>
				<NameInput
					class="basis-1/2"
					:defaultVal="graphState.name"
					idName="name-input"
					@nameChanged="onNameChanged"
				/>
				<FormButton
					label="Auto fill"
					@click="fetchStats(graphState.name)"
				/>
			</form>
			<form
				class="panel grid grid-cols-2 sm:grid-cols-3"
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
					idName="spA-input"
					text="Sp. Attack"
					:defaultVal="String(graphState.spA)"
					@statChanged="onSpAChanged"
				/>
				<LabelInput
					idName="spD-input"
					text="Sp. Defense"
					:defaultVal="String(graphState.spD)"
					@statChanged="onSpDChanged"
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
						class="select select-primary border-none rounded select-sm"
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
				<FormButton
					label="Save as PNG"
					@click="outputImage('png')"
				/>
				<FormButton
					class="col-span-2"
					label="Save as SVG"
					@click="outputImage()"
				/>
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
import FormButton from "./components/FormButton.vue";
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
		AppHeader,
		FormButton,
		LabelInput,
		NameInput,
		StatGraph,
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
		onSpAChanged(value: string) {
			graphState.setSpA(Number(value));
		},
		onSpDChanged(value: string) {
			graphState.setSpD(Number(value));
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
</style>
