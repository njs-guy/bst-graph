<script lang="ts">
let { label = "Stat", stat = 50, fontSize = 16 } = $props();
</script>

<div
	class="bst-stat-bar grid grid-cols-3 gap-2 m-1"
	style="--bst-body-font-size: {fontSize}px;"
>
	<div class="grid grid-cols-2">
		<p>{label}</p>
		<p class="place-self-end">{stat}</p>
	</div>
	<div class="col-span-2 flex h-4 self-center rounded bg-base-300">
		<div class="self-center rounded h-full w-1/2 bg-primary"></div>
	</div>
</div>

<style scoped>
.bst-stat-bar {
	font-size: var(--bst-body-font-size);
}
</style>
