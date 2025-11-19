<script lang="ts">
import { outputImage } from "$lib/modules/outputImage";

function saveAsSvg() {
	outputImage(true);
}

function saveAsPng() {
	outputImage();
}

let { exportAsSvg = false } = $props();
</script>

{#if exportAsSvg}
	<button
		class="btn btn-primary shadow-none"
		onclick={saveAsSvg}
	>
		Export as SVG
	</button>
{:else}
	<button
		class="btn btn-primary shadow-none"
		onclick={saveAsPng}
	>
		Export as PNG
	</button>
{/if}
