<script lang="ts">
import { defineComponent } from "vue";
import { pokeTypes } from "../modules/pokeTypes";

// TODO: Put script at top of each component

export default defineComponent({
	props: {
		label: String,
	},
	data() {
		return {
			types: pokeTypes,
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
			<option :value="types.grass">{{ types.grass.name }}</option>
			<option :value="types.fire">{{ types.fire.name }}</option>
			<option :value="types.water">{{ types.water.name }}</option>
		</select>
	</div>
</template>
