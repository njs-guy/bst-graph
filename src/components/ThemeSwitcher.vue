<template>
	<div class="theme-switcher self-center">
		<input
			type="checkbox"
			class="mr-1"
			id="theme"
			name="theme"
			:value="dark"
			@change="onChange"
		/>
		<label
			for="theme"
			class="text-lg"
			>Dark mode</label
		>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	Name: "ThemeSwitcher",
	data() {
		return {
			dark: false,
		};
	},
	methods: {
		// Emit dark value when changed
		onChange() {
			const themeId = document.getElementById(
				"theme"
			) as HTMLInputElement;

			if (themeId === null) {
				return;
			} else {
				this.dark = themeId?.checked;
			}

			const d = this.dark;
			this.$emit("darkMode", d);
		},
	},
});
</script>

<style scoped></style>
