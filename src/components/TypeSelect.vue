<script lang="ts">
import { defineComponent } from "vue";
import { pokeTypes } from "../modules/pokeTypes";
import capitalizeWord from "../modules/capitalizeWord";

export default defineComponent({
	name: "TypeSelect",
	props: {
		label: String,
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
				:value="type"
			>
				{{ capitalizeWord(type) }}
			</option>
		</select>
	</div>
</template>
