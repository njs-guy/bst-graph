<script lang="ts">
import { defineComponent } from "vue";
import StatBar from "./StatBar.vue";
import TypeBadge from "./TypeBadge.vue";
import { graphState } from "../modules/graphState";

export default defineComponent({
	Name: "StatGraph",
	components: {
		StatBar,
		TypeBadge,
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
		class="graph bg-base-200 rounded-md p-2 flex flex-col gap-2"
		id="output"
	>
		<h1
			v-show="graphState.showName"
			class="name text-3xl leading-none"
		>
			{{ graphState.name }}
		</h1>
		<div
			v-show="graphState.showTypes"
			class="flex flex-row justify-center gap-1"
		>
			<TypeBadge :typeName="graphState.type1" />
			<TypeBadge
				:typeName="graphState.type2"
				id-name="type2"
			/>
		</div>
		<div class="flex flex-col place-items-center gap-y-1">
			<StatBar
				class="hp-bar"
				barId="bar-hp"
				label="HP"
				:stat="graphState.hp"
			/>
			<StatBar
				class="att-bar"
				barId="bar-att"
				label="Attack"
				:stat="graphState.att"
			/>
			<StatBar
				class="def-bar"
				barId="bar-def"
				label="Defense"
				:stat="graphState.def"
			/>
			<StatBar
				class="spA-bar"
				barId="bar-spA"
				label="Sp. Atk"
				:stat="graphState.spA"
			/>
			<StatBar
				class="spD-bar"
				barId="bar-spD"
				label="Sp. Def"
				:stat="graphState.spD"
			/>
			<StatBar
				class="spe-bar"
				barId="bar-spe"
				label="Speed"
				:stat="graphState.spe"
			/>
			<StatBar
				v-show="graphState.showTotal"
				class="tot-bar"
				barId="bar-tot"
				label="Total"
				:stat="graphState.total"
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
