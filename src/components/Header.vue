<template>
	<div class="header flex flex-row p-2 bg-base-200">
		<h1 class="text-2xl mr-auto">BST Graph</h1>
		<ThemeSwitcher
			@darkMode="onDarkMode"
			class="float-right"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";

export default defineComponent({
	Name: "Header",
	methods: {
		onDarkMode(d: Boolean) {
			this.$emit("darkMode", d);
		},
	},
	components: {
		ThemeSwitcher,
	},
});
</script>

<style scoped></style>
