<script lang="ts">
import PkmnStats from "$lib/modules/pkmnStats";

var stats = $state(new PkmnStats(100, 101, 102, 103, 104, 105));
</script>

<svelte:head>
	<title>BST Graph v2 Test</title>
</svelte:head>

<main>
	<div class="main-content flex flex-col justify-self-center">
		<p>HP: {stats.hp}</p>
		<p>Attack: {stats.attack}</p>
		<p>Defense: {stats.defense}</p>
		<p>Sp. Attack: {stats.spAttack}</p>
		<p>Sp. Defense: {stats.spDefense}</p>
		<p>Speed: {stats.speed}</p>
		<p>Total: {stats.total}</p>
	</div>
</main>
