<template>
	<div
		class="graph bg-base-200 rounded-md p-1.5"
		id="output"
	>
		<h1 class="name text-3xl leading-normal">{{ nameLabel }}</h1>
		<div class="flex flex-col place-items-center leading-snug">
			<StatBar
				class="hp-bar"
				barId="bar-hp"
				label="HP"
				:stat="hpStat"
			/>
			<StatBar
				class="att-bar"
				barId="bar-att"
				label="Attack"
				:stat="attStat"
			/>
			<StatBar
				class="def-bar"
				barId="bar-def"
				label="Defense"
				:stat="defStat"
			/>
			<StatBar
				class="spA-bar"
				barId="bar-spA"
				label="Sp. Atk"
				:stat="spAStat"
			/>
			<StatBar
				class="spD-bar"
				barId="bar-spD"
				label="Sp. Def"
				:stat="spDStat"
			/>
			<StatBar
				class="spe-bar"
				barId="bar-spe"
				label="Speed"
				:stat="speStat"
			/>
			<StatBar
				class="tot-bar"
				barId="bar-tot"
				label="Total"
				:stat="totStat"
				:isTotal="true"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatBar from "./StatBar.vue";

// TODO: Drop colors for stats
// Basically, have a background for each bar
// as a guide for how strong each stat is.
// TODO: Possibly rounded bar corners

export default defineComponent({
	Name: "StatGraph",
	components: {
		StatBar,
	},
	props: {
		nameLabel: String,
		hpStat: Number,
		attStat: Number,
		defStat: Number,
		spAStat: Number,
		spDStat: Number,
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
