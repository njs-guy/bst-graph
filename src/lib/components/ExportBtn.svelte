<script lang="ts">
function saveAsSvg() {
	console.log("svg");
}

function saveAsPng() {
	console.log("png");
}

let { exportAsPng = false } = $props();
</script>

{#if exportAsPng}
	<button
		class="btn btn-primary shadow-none"
		onclick={saveAsPng}>Export as PNG</button
	>
{:else}
	<button
		class="btn btn-primary shadow-none"
		onclick={saveAsSvg}>Export as SVG</button
	>
{/if}
