<script lang="ts">
let { children, colorOverride = "" } = $props();

// Defaults to bg-base-100 in dui
if (colorOverride === "") {
	colorOverride = "var(--color-base-100)";
}
</script>

<div
	class="card"
	style="--bst-card-color:{colorOverride}"
>
	{@render children?.()}
</div>

<style scoped>
@reference "../../app.css";

.card {
	@apply p-3 pt-1.5 pb-1.5;
	background-color: var(--bst-card-color);
}
</style>
