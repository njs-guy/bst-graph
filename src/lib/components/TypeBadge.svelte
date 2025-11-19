<script lang="ts">
let { label = "Normal", bgColor = "#fff", textColor = "#000" } = $props();
</script>

<div
	class="bst-type-badge p-1 pt-0 pb-0 mb-1.5 mt-1.5 rounded-md w-18"
	style="--bst-type-badge-bg-color:{bgColor};--bst-type-badge-text-color:{textColor};"
>
	<p class="justify-self-center">{label}</p>
</div>

<style scoped>
.bst-type-badge {
	background-color: var(--bst-type-badge-bg-color);
	color: var(--bst-type-badge-text-color);
}
</style>
