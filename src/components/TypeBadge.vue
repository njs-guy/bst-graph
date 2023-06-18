<script lang="ts">
import { defineComponent } from "vue";
import capitalizeWord from "../modules/capitalizeWord";

export default defineComponent({
	name: "TypeBadge",
	props: {
		typeName: { type: String, default: "none" },
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
		class="badge border-none rounded w-full bg-red-500 text-white"
	>
		{{ capitalizeWord(typeName) }}
	</div>
</template>
