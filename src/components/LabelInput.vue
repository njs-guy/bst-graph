<template>
	<div class="input-container flex flex-col">
		<label
			:for="idName"
			class="place-self-start"
			>{{ text }}</label
		>
		<input
			type="number"
			:id="idName"
			:name="idName"
			class="rounded outline-primary caret-primary bg-base-100 outline-offset-0 h-8 px-2"
			min="1"
			max="999"
			:value="defaultVal"
			@change="onChange($event)"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	Name: "LabelInput",
	props: {
		idName: String,
		text: String,
		defaultVal: String,
	},
	methods: {
		// Emit number box value when changed
		onChange(event: Event) {
			let num = (event.target as HTMLInputElement).value;
			
			if (Number(num) > 999) {
				num = "999";
			}

			this.$emit("statChanged", num);
		},
	},
});
</script>
