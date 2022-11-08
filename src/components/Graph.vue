<template>
	<div
		class="graph bg-panel dark:bg-panel-dark rounded-md px-3 py-1"
		id="output"
	>
		<h1 class="name text-3xl leading-normal">{{ nameLabel }}</h1>
		<div class="flex flex-col place-items-center">
			<Bar
				class="hp-bar"
				barId="bar-hp"
				label="HP"
				:stat="hpStat"
			/>
			<Bar
				class="att-bar"
				barId="bar-att"
				label="Attack"
				:stat="attStat"
			/>
			<Bar
				class="def-bar"
				barId="bar-def"
				label="Defense"
				:stat="defStat"
			/>
			<Bar
				class="spa-bar"
				barId="bar-spa"
				label="Sp. Atk"
				:stat="spaStat"
			/>
			<Bar
				class="spd-bar"
				barId="bar-spd"
				label="Sp. Def"
				:stat="spdStat"
			/>
			<Bar
				class="spe-bar"
				barId="bar-spe"
				label="Speed"
				:stat="speStat"
			/>
			<Bar
				class="tot-bar"
				barId="bar-tot"
				label="Total"
				:stat="totStat"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Bar from "./Bar.vue";
import LabelInput from "./LabelInput.vue";

export default defineComponent({
	Name: "Graph",
	components: {
		Bar,
		LabelInput,
	},
	props: {
		nameLabel: String,
		hpStat: Number,
		attStat: Number,
		defStat: Number,
		spaStat: Number,
		spdStat: Number,
		speStat: Number,
		totStat: Number,
	},
});
</script>

<style scoped>
.graph {
	width: 100%;
}
</style>
