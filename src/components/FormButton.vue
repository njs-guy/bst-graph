<template>
	<button
		type="button"
		class="btn btn-primary btn-sm self-end basis-1/2 rounded animate-none"
	>
		{{ label }}
	</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "FormButton",
	props: {
		label: String,
	},
});
</script>
