<script lang="ts">
// Vue
import { defineComponent } from "vue";

// Components
import AppHeader from "./components/AppHeader.vue";
import FormButton from "./components/FormButton.vue";
import LabelInput from "./components/LabelInput.vue";
import NameInput from "./components/NameInput.vue";
import StatGraph from "./components/StatGraph.vue";
import TypeSelect from "./components/TypeSelect.vue";

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
		TypeSelect,
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
		onHpChanged(value: number) {
			graphState.setHp(value);
		},
		onAttChanged(value: number) {
			graphState.setAtt(value);
		},
		onDefChanged(value: number) {
			graphState.setDef(value);
		},
		onSpAChanged(value: number) {
			graphState.setSpA(value);
		},
		onSpDChanged(value: number) {
			graphState.setSpD(value);
		},
		onSpeChanged(value: number) {
			graphState.setSpe(value);
		},
		setShowName(value: boolean) {
			appConfig.saveShowName(value);
		},
	},
	mounted: function () {
		// On load
		randomGraph();
		appConfig.loadSettings();
	},
});
</script>

<template>
	<div class="mc-margin">
		<AppHeader @darkMode="appConfig.changeTheme" />
		<div class="main-content grid grid-cols-1 gap-4 max-w-lg">
			<StatGraph />
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
				<label class="label cursor-pointer">
					<span class="label-text">Show name</span>
					<input
						type="checkbox"
						v-model="graphState.showName"
						@change="appConfig.saveShowName(graphState.showName)"
						class="checkbox checkbox-primary"
					/>
				</label>
			</form>
			<form
				class="panel grid grid-cols-2"
				id="type-sec"
			>
				<TypeSelect
					label="Type 1"
					id="typeSelect1"
				/>
				<TypeSelect
					label="Type 2"
					id="typeSelect2"
				/>
				<label class="label cursor-pointer">
					<span class="label-text">Show types</span>
					<input
						type="checkbox"
						v-model="graphState.showTypes"
						@change="appConfig.saveShowTypes(graphState.showTypes)"
						class="checkbox checkbox-primary"
					/>
				</label>
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
				<label class="label cursor-pointer">
					<span class="label-text">Show total</span>
					<input
						type="checkbox"
						v-model="graphState.showTotal"
						@change="appConfig.saveShowTotal(graphState.showTotal)"
						class="checkbox checkbox-primary"
					/>
				</label>
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
	@apply bg-base-200 rounded-md p-3 place-content-stretch gap-3;
}
</style>
