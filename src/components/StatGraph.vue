<script lang="ts">
import { defineComponent } from "vue";
import StatBar from "./StatBar.vue";
import TypeBadge from "./TypeBadge.vue";
import { graphState } from "../modules/graphState";

// TODO: Use graphState instead of props

export default defineComponent({
	Name: "StatGraph",
	components: {
		StatBar,
		TypeBadge,
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
	data() {
		return {
			graphState,
		};
	},
});
</script>

<template>
	<div
		class="graph bg-base-200 rounded-md p-1.5"
		id="output"
	>
		<h1 class="name text-3xl leading-normal clear-both">
			{{ nameLabel }}
		</h1>
		<div class="flex flex-row justify-center mr-1.5 mb-1 gap-1">
			<!-- Type 1 -->
			<TypeBadge :typeName="graphState.type1" />
			<!-- Type 2 -->
			<TypeBadge :typeName="graphState.type2" />
		</div>
		<div
			class="flex flex-col place-items-center leading-tight pr-1.5 clear-right"
		>
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

<style scoped>
.graph {
	width: 100%;
}
</style>
