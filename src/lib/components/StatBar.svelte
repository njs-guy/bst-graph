<script lang="ts">
// percentage of width to use for the bar
var width = $state(20);

let {
	label = "Stat",
	stat = 50,
	height = 16,
	fontSize = 16,
	color = "red",
	isTotal = false,
} = $props();

function updateWidth() {
	if (isTotal) {
		width = (stat / 800) * 100;
	} else {
		width = (stat / 200) * 100;
	}
}

updateWidth();
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
		class="bst-stat-bar col-span-2 flex self-center"
		style="--bst-stat-bar-height: {height}px;"
	>
		<div
			class="bst-stat-bar-inner self-center rounded h-full"
			style="--bst-stat-bar-width: {width}%; --bst-stat-bar-color:{color}"
		></div>
	</div>
</div>

<style scoped>
.bst-stat-bar-row {
	font-size: var(--bst-body-font-size);
}

.bst-stat-bar {
	height: var(--bst-stat-bar-height);
}

.bst-stat-bar-inner {
	width: var(--bst-stat-bar-width);
	background-color: var(--bst-stat-bar-color);
}
</style>
