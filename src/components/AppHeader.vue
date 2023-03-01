<template>
	<div class="navbar bg-base-200 rounded-md mb-4">
		<h1 class="text-2xl ml-2 mr-auto">BST Graph</h1>
		<GitHubIcon />
		<ThemeSwitcher
			@darkMode="onDarkMode"
			class="float-right"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";
import GitHubIcon from "./GitHubIcon.vue";

export default defineComponent({
	Name: "AppHeader",
	methods: {
		onDarkMode(d: boolean) {
			this.$emit("darkMode", d);
		},
	},
	components: {
		ThemeSwitcher,
		GitHubIcon,
	},
});
</script>
