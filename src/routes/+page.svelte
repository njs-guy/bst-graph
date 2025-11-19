<script lang="ts">
import BstGraph from "$lib/components/BstGraph.svelte";
import PkmnStats from "$lib/modules/pkmnStats";

var stats = $state(new PkmnStats(100, 201, 102, 103, 104, 107));
</script>

<svelte:head>
	<title>BST Graph v2 Test</title>
</svelte:head>

<main>
	<div class="main-content flex flex-col justify-self-center">
		<BstGraph
			{stats}
			name="Pikablu"
		/>
	</div>
</main>
