<template>
	<div
		class="graph bg-base-200 rounded-md px-3 py-1"
		id="output"
	>
		<h1 class="name text-3xl leading-normal">{{ nameLabel }}</h1>
		<div class="flex flex-col place-items-center">
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
				class="spa-bar"
				barId="bar-spa"
				label="Sp. Atk"
				:stat="spaStat"
			/>
			<StatBar
				class="spd-bar"
				barId="bar-spd"
				label="Sp. Def"
				:stat="spdStat"
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
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatBar from "./StatBar.vue";

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
