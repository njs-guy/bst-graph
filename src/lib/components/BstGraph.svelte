<script lang="ts">
import Card from "./Card.svelte";
import StatBar from "./StatBar.svelte";
import TypeBadge from "./TypeBadge.svelte";
import ExportBtn from "./ExportBtn.svelte";

import PkmnStats from "$lib/modules/pkmnStats";
import { smallGraph } from "$lib/modules/graphSize";
import { theme } from "$lib/stores/themeStore";
import { themeDark, type GraphTheme } from "$lib/modules/graphTheme";

const fallbackStats = new PkmnStats(100, 101, 102, 103, 104, 105);
const graphSize = smallGraph;

let typeName1: string = $state("water");
let typeName2: string = $state("fairy");
let currentTheme: GraphTheme = $state(themeDark);

theme.subscribe((value) => {
	currentTheme = value;
});

let { stats = fallbackStats, name = "Name" } = $props();
</script>

<div
	class="bst-graph"
	id="bst-graph"
	style="--bst-width:{graphSize.width}rem;
	--bst-text-color:{currentTheme.textColor};"
>
	<Card colorOverride={currentTheme.background}>
		<h2
			class="self-center pt-0 bst-graph-name"
			style="--bst-name-font-size:{graphSize.nameFontSize}px; "
		>
			{name}
		</h2>
		<div class="flex flex-row gap-2 self-center">
			<TypeBadge
				label={typeName1}
				bgColor={currentTheme[typeName1].bg}
				textColor={currentTheme[typeName1].text}
			/>
			<TypeBadge
				label={typeName2}
				bgColor={currentTheme[typeName2].bg}
				textColor={currentTheme[typeName2].text}
			/>
		</div>
		<StatBar
			label="HP"
			stat={stats.hp}
			height={graphSize.barHeight}
			fontSize={graphSize.fontSize}
			color={currentTheme.hp}
		/>
		<StatBar
			label="Attack"
			stat={stats.attack}
			height={graphSize.barHeight}
			fontSize={graphSize.fontSize}
			color={currentTheme.attack}
		/>
		<StatBar
			label="Defense"
			stat={stats.defense}
			height={graphSize.barHeight}
			fontSize={graphSize.fontSize}
			color={currentTheme.defense}
		/>
		<StatBar
			label="Sp. Att"
			stat={stats.spAttack}
			height={graphSize.barHeight}
			fontSize={graphSize.fontSize}
			color={currentTheme.spAttack}
		/>
		<StatBar
			label="Sp. Def"
			stat={stats.spDefense}
			height={graphSize.barHeight}
			fontSize={graphSize.fontSize}
			color={currentTheme.spDefense}
		/>
		<StatBar
			label="Speed"
			stat={stats.speed}
			height={graphSize.barHeight}
			fontSize={graphSize.fontSize}
			color={currentTheme.speed}
		/>
		<StatBar
			label="Total"
			stat={stats.total}
			height={graphSize.barHeight}
			fontSize={graphSize.fontSize}
			isTotal={true}
			color={currentTheme.total}
		/>
	</Card>
</div>

<div class="flex flex-row place-self-center gap-2 mt-4">
	<ExportBtn exportAsSvg={true} />
	<ExportBtn />
</div>

<style scoped>
.bst-graph {
	font-weight: bold;
	width: var(--bst-width);
	color: var(--bst-text-color);
}

.bst-graph-name {
	font-size: var(--bst-name-font-size);
}
</style>
