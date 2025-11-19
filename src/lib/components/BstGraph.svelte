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
			fontSize={graphSize.fontSize}
		/>
		<StatBar
			label="Attack"
			stat={stats.attack}
			fontSize={graphSize.fontSize}
		/>
		<StatBar
			label="Defense"
			stat={stats.defense}
			fontSize={graphSize.fontSize}
		/>
		<StatBar
			label="Sp. Att"
			stat={stats.spAttack}
			fontSize={graphSize.fontSize}
		/>
		<StatBar
			label="Sp. Def"
			stat={stats.spDefense}
			fontSize={graphSize.fontSize}
		/>
		<StatBar
			label="Speed"
			stat={stats.speed}
			fontSize={graphSize.fontSize}
		/>
		<StatBar
			label="Total"
			stat={stats.total}
			fontSize={graphSize.fontSize}
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
