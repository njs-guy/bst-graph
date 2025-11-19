<script lang="ts">
let { label = "Stat", stat = 50, height = 16, fontSize = 16 } = $props();
</script>

<div
	class="bst-stat-bar-row grid grid-cols-3 gap-2 m-1"
	style="--bst-body-font-size: {fontSize}px;"
>
	<div class="grid grid-cols-2">
		<p>{label}</p>
		<p class="place-self-end">{stat}</p>
	</div>
	<div
		class="bst-stat-bar col-span-2 flex h-4 self-center rounded bg-base-300"
		style="--bst-stat-bar-height: {height}px;"
	>
		<div class="self-center rounded h-full w-1/2 bg-primary"></div>
	</div>
</div>

<style scoped>
.bst-stat-bar-row {
	font-size: var(--bst-body-font-size);
}

.bst-stat-bar {
	height: var(--bst-stat-bar-height);
}
</style>
