<script lang="ts">
import Card from "./Card.svelte";
import StatBar from "./StatBar.svelte";
import PkmnStats from "$lib/modules/pkmnStats";

const fallbackStats = new PkmnStats(100, 101, 102, 103, 104, 105);

let { stats = fallbackStats, name = "Name" } = $props();
</script>

<div class="w-100 font-bold">
	<Card>
		<h2 class="self-center pt-0">{name}</h2>
		<StatBar
			label="HP"
			stat={stats.hp}
		/>
		<StatBar
			label="Attack"
			stat={stats.attack}
		/>
		<StatBar
			label="Defense"
			stat={stats.defense}
		/>
		<StatBar
			label="Sp. Att"
			stat={stats.spAttack}
		/>
		<StatBar
			label="Sp. Def"
			stat={stats.spDefense}
		/>
		<StatBar
			label="Speed"
			stat={stats.speed}
		/>
		<StatBar
			label="Total"
			stat={stats.total}
		/>
	</Card>
</div>
