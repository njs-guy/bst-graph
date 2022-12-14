<template>
	<div class="input-container flex flex-col">
		<label
			:for="idName"
			class="place-self-start"
			>Name</label
		>
		<input
			type="text"
			class="rounded outline-primary caret-primary bg-base-100 outline-offset-0 h-8 px-2"
			:value="defaultVal"
			:id="idName"
			:name="idName"
			@change="onChange($event)"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	Name: "NameInput",
	props: {
		idName: String,
		defaultVal: String,
	},
	methods: {
		// emit text box value when changed
		onChange(event: Event) {
			const text = (event.target as HTMLInputElement).value;
			this.$emit("nameChanged", text);
		},
	},
});
</script>
