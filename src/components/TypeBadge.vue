<script lang="ts">
import { defineComponent } from "vue";
import capitalizeWord from "../modules/capitalizeWord";

export default defineComponent({
	name: "TypeBadge",
	props: {
		typeName: { type: String, default: "none" },
	},
	methods: {
		changeColor() {
			console.log("wow");
		},
	},
	data() {
		return {
			capitalizeWord,
		};
	},
});
</script>

<template>
	<div
		v-if="typeName !== 'none'"
		class="badge badge-lg bg-red-500 border-none rounded w-full"
	>
		<p class="type-text">
			{{ capitalizeWord(typeName) }}
		</p>
	</div>
</template>
