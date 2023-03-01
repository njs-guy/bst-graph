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

// Prevents the button from sending a query to the URL.
// All this does in this instance is refresh the page,
// which is disruptive and annoying.
document.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
	}
});

export default defineComponent({
	name: "FormButton",
	props: {
		label: String,
	},
});
</script>
