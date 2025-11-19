<script lang="ts">
import Card from "./Card.svelte";
import StatBar from "./StatBar.svelte";
import PkmnStats from "$lib/modules/pkmnStats";
import { smallGraph } from "$lib/modules/graphSize";

const fallbackStats = new PkmnStats(100, 101, 102, 103, 104, 105);
const graphSize = smallGraph;

let { stats = fallbackStats, name = "Name" } = $props();
</script>

<div
	class="bst-graph"
	style="--bst-width:{graphSize.width}rem;"
>
	<Card>
		<h2
			class="self-center pt-0 bst-graph-name"
			style="--bst-name-font-size:{graphSize.nameFontSize}px; "
		>
			{name}
		</h2>
		<StatBar
			label="HP"
			stat={stats.hp}
			height={graphSize.barHeight}
			fontSize={graphSize.fontSize}
			color="red"
		/>
		<StatBar
			label="Attack"
			stat={stats.attack}
			height={graphSize.barHeight}
			fontSize={graphSize.fontSize}
			color="orange"
		/>
		<StatBar
			label="Defense"
			stat={stats.defense}
			height={graphSize.barHeight}
			fontSize={graphSize.fontSize}
			color="gold"
		/>
		<StatBar
			label="Sp. Att"
			stat={stats.spAttack}
			height={graphSize.barHeight}
			fontSize={graphSize.fontSize}
			color="dodgerblue"
		/>
		<StatBar
			label="Sp. Def"
			stat={stats.spDefense}
			height={graphSize.barHeight}
			fontSize={graphSize.fontSize}
			color="limegreen"
		/>
		<StatBar
			label="Speed"
			stat={stats.speed}
			height={graphSize.barHeight}
			fontSize={graphSize.fontSize}
			color="orchid"
		/>
		<StatBar
			label="Total"
			stat={stats.total}
			height={graphSize.barHeight}
			fontSize={graphSize.fontSize}
			isTotal={true}
			color="slategray"
		/>
	</Card>
</div>

<style scoped>
.bst-graph {
	font-weight: bold;
	width: var(--bst-width);
}

.bst-graph-name {
	font-size: var(--bst-name-font-size);
}
</style>
