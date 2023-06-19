<script lang="ts">
import { defineComponent, watch } from "vue";
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
			const select = event.target as HTMLSelectElement;
			const selectId = select.id;
			const selectValue = select.value;

			if (selectId === "typeSelect1") {
				console.log("Set type 1: " + selectValue);
				graphState.setType1(selectValue);
			}
			if (selectId === "typeSelect2") {
				console.log("Set type 2: " + selectValue);
				graphState.setType2(selectValue);
			}
		},
	},
	data() {
		return {
			types: getPokeTypes(),
			graphState,
			capitalizeWord,
		};
	},
	created() {
		watch(
			[() => graphState.type1, () => graphState.type2],
			([newType1, newType2]) => {
				const typeSelect1 = document.getElementById(
					"typeSelect1"
				) as HTMLSelectElement;
				const typeSelect2 = document.getElementById(
					"typeSelect2"
				) as HTMLSelectElement;

				if (this.id === "typeSelect1") {
					typeSelect1.value = newType1;
				}
				if (this.id === "typeSelect2") {
					typeSelect2.value = newType2;
				}
			}
		);
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
			:ref="id"
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
