<script lang="ts">
import { defineComponent } from "vue";
import { getPokeTypes } from "../modules/pokeTypes";
import capitalizeWord from "../modules/capitalizeWord";
import { graphState } from "../modules/graphState";

export default defineComponent({
	name: "TypeSelect",
	props: {
		label: String,
		id: String,
	},
	methods: {
		onChange(event: Event) {
			const selected = (event.target as HTMLSelectElement).value;
			const targetId = (event.target as HTMLSelectElement).id;

			if (targetId === "type1") {
				console.log("Set type 1: " + selected);
				graphState.setType1(selected);
			}
			if (targetId === "type2") {
				console.log("Set type 2: " + selected);
				graphState.setType2(selected);
			}
		},
	},
	data() {
		return {
			types: getPokeTypes(),
			capitalizeWord,
		};
	},
});
</script>

<template>
	<div class="flex flex-col">
		<label
			for="type"
			class="place-self-start"
			>{{ label }}</label
		>
		<select
			:id="id"
			class="select select-primary border-none rounded select-sm"
			@change="onChange($event)"
		>
			<option
				value="none"
				selected
			>
				None
			</option>
			<option
				v-for="(type, key) of types"
				:key="key"
				:value="type"
			>
				{{ capitalizeWord(type) }}
			</option>
		</select>
	</div>
</template>
