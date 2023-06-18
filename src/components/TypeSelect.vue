<script lang="ts">
import { defineComponent } from "vue";
import { pokeTypes } from "../modules/pokeTypes";
import capitalizeWord from "../modules/capitalizeWord";
import { graphState } from "../modules/graphState";

export default defineComponent({
	name: "TypeSelect",
	props: {
		label: String,
		isType2: { type: Boolean, default: false },
	},
	methods: {
		onChange(event: Event) {
			const selected = (event.target as HTMLSelectElement).value;

			if (this.isType2) {
				console.log("Set type 2: " + selected);
				graphState.setType2(selected);
			} else {
				console.log("Set type 1: " + selected);
				graphState.setType1(selected);
			}
		},
	},
	data() {
		return {
			types: pokeTypes,
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
			name="quality"
			id="quality-select"
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
				v-for="(type, key) in types"
				:key="key"
				:value="key"
			>
				{{ capitalizeWord(key) }}
			</option>
		</select>
	</div>
</template>
